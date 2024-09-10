'use client';
import React, { useState, useEffect } from 'react';
import { api } from '@/services/api';
import { useRouter } from 'next/navigation';
import { LoadContainer } from '@/components/general/LoadContainer';
import { ReviewCountCard } from '@/components/review/ReviewCountCard';
import { Button, Card, CardContent, Typography, Stack } from '@mui/material';
import { Container, Title } from './styles';
import { ReviewButton } from '@/components/review/ReviewButton';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface ReviewWordsType {
    id: number;
    previous_ease_factor: number;
    previous_interval: number;
    repetitions: number;
    words: {
        english_example: string;
        portuguese_context: string;
        translation: string;
        word: string;
    };
}

export default function ReviewPage() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [userData, setUserData] = useState();
    const [wordsToReview, setWordsToReview] = useState<ReviewWordsType[]>();
    const [count, setCount] = useState(0)
    const [currentWord, setCurrentWord] = useState<ReviewWordsType | null>(null);
    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    const [snackBarOpen, setSnackBarOpen] = useState<boolean>();
    const router = useRouter();

    const getWordsToApi = async (customer_id: string) => {
        setIsLoading(true);
        const params = { customer_id };
        const response = await api.post('/words/getwordsreview', params);
        if (response.data) {
            setWordsToReview(response.data);
        }
        setIsLoading(false);
    };

    const handleInitReview = () => {
        if (wordsToReview && wordsToReview.length > 0) {
            setCurrentWord(wordsToReview[0]);
        }
    };

    const handleFlipCard = () => {
        setIsFlipped(!isFlipped);
    };

    const handleSetReviewDate = async (data) => {
        try {
            if (currentWord) {
                const reviewData = {
                    words_id: currentWord.id,
                    data,
                    customer_id: userData.user.id
                };

                const response = await api.post('/words/setdatareview', reviewData);
                handleShowSnackBar()
                if (response) {

                    if (count === wordsToReview.length - 1) {

                        setWordsToReview(null);
                        setCurrentWord(null);
                        await getWordsToApi(userData.user.id);
                    } else {

                        setCount(count + 1);
                        setCurrentWord(wordsToReview[count + 1]);
                    }
                }
            }
        } catch (e) {
            console.log(e);
        }
    };

    const handleCloseSnackBar = () => setSnackBarOpen(false)

    const handleShowSnackBar = () => setSnackBarOpen(true)

    const handleBackToReviewCount = () => {
        setCurrentWord(null);
        setIsFlipped(false);
    };

    useEffect(() => {
        const checkAuth = () => {
            const userData = localStorage.getItem('userData');
            if (!userData) {
                router.push('/register');
            } else {
                const parsedData = JSON.parse(userData);
                setUserData(parsedData);
                if (!parsedData.user || !parsedData.token) {
                    router.push('/register');
                } else {
                    getWordsToApi(parsedData.user.id);
                }
            }
        };

        checkAuth();
    }, []);

    if (isLoading) {
        return <LoadContainer />;
    }

    console.log()

    return (
        <Container>
            <Title>Palavras para Revisar Hoje</Title>
            {currentWord && <Button
                variant="text"
                onClick={handleBackToReviewCount}
                sx={{ marginTop: '10px' }}
            >
                Cancelar revisão
            </Button>}

            {!currentWord && (
                <ReviewCountCard
                    description="3000 palavras essenciais"
                    count={wordsToReview && wordsToReview.length}
                    onClick={handleInitReview}
                />
            )}

            {currentWord && (
                <Card sx={{ width: '100%', marginTop: '20px', borderRadius: '16px' }}>
                    <CardContent
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            gap: 2
                        }}
                    >
                        {!isFlipped ? (
                            <Typography variant="h5">
                                {currentWord.words.word}
                            </Typography>
                        ) : (
                            <>
                                <Typography variant="h5">
                                    {currentWord.words.translation}
                                </Typography>
                                <Stack direction={'row'} spacing={2}>
                                    <ReviewButton
                                        handleSetReviewDate={handleSetReviewDate}
                                        title="Errei"
                                        quality={0}
                                        previousInterval={currentWord.previous_interval}
                                        previousEaseFactor={currentWord.previous_ease_factor}
                                        repetitions={currentWord.repetitions} />
                                    <ReviewButton
                                        handleSetReviewDate={handleSetReviewDate}
                                        title="Acertei"
                                        quality={4}
                                        previousInterval={currentWord.previous_interval}
                                        previousEaseFactor={currentWord.previous_ease_factor}
                                        repetitions={currentWord.repetitions} />

                                </Stack>
                            </>
                        )}
                        <Button
                            variant="outlined"
                            onClick={handleFlipCard}
                            sx={{ marginTop: '10px' }}
                        >
                            {isFlipped ? 'Voltar' : 'Virar Cartão'}
                        </Button>
                    </CardContent>
                </Card>
            )}
            <Snackbar open={snackBarOpen} autoHideDuration={1500} onClose={handleCloseSnackBar}>
                <Alert
                    onClose={handleCloseSnackBar}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Palavra revisada com sucesso!
                </Alert>
            </Snackbar>
        </Container>
    );
}

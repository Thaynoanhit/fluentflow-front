'use client';
import React, { useEffect, useState } from 'react';
import { WordStudyCard } from '@/components/study/WordStudyCard';
import { api } from '@/services/api';
import { useRouter } from 'next/navigation';
import { LoadContainer } from '@/components/general/LoadContainer';
import BasicModal from '@/components/study/BasicModal';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { MdMoodBad } from "react-icons/md";
import { AdviceText } from './styles';
import { Button } from '@mui/material';


import {
    Container,
    Title
} from './styles';

export default function StudyPage() {

    const [wordsToStudy, setWordsToStudy] = useState();
    const [isLoading, setIsLoading] = useState<boolean>();
    const [buttonLoading, setButtonLoading] = useState<boolean>();
    const [userData, setUserData] = useState();
    const [snackBarOpen, setSnackBarOpen] = useState<boolean>();
    const [open, setOpen] = useState<boolean>();
    const [selectedWord, setSelectedWord] = useState();
    const router = useRouter();

    const getWordsToApi = async (customer_id: string) => {
        const params = { customer_id }
        const response = await api.post('/words/getnew', params)
        if (response.data) {
            console.log(response.data)
            setWordsToStudy(response.data)
        }
    }

    const handleOpenModal = (wordsData) => {
        setOpen(true);
        setSelectedWord(wordsData);
    };

    const handleClose = () => setOpen(false);

    const handleCloseSnackBar = () => setSnackBarOpen(false)

    const handleShowSnackBar = () => setSnackBarOpen(true)

    const handleGoBack = () => router.push('/dashboard')


    const handleSaveWord = async (words_id) => {
        const params = { customer_id: userData.user.id, words_id }
        const response = await api.post('/words/setwordreview', params)
        setButtonLoading(true)
        if (response.data) {
            handleShowSnackBar();
            handleClose()
            getWordsToApi(userData.user.id);
            setButtonLoading(false);
        }
    }

    useEffect(() => {
        const checkAuth = () => {
            const userData = localStorage.getItem("userData");
            if (!userData) {
                router.push("/register");
            } else {
                const parsedData = JSON.parse(userData);
                setUserData(parsedData);

                if (!parsedData.user || !parsedData.token) {
                    router.push("/register");
                } else {
                    getWordsToApi(parsedData.user.id);
                }
            }
        };

        checkAuth();
    }, []);

    if (isLoading) {
        return (
            <LoadContainer />
        );
    }

    return (
        <Container>
            <Title>Palavras para estudar</Title>
            {wordsToStudy && wordsToStudy.map((item, index) => (
                <WordStudyCard
                    key={index}
                    word={item.words.word}
                    translation={item.words.translation}
                    words_id={item.words_id}
                    handleOpenModal={handleOpenModal}
                />
            ))}
            {wordsToStudy?.length == 0 &&
                <>
                    <AdviceText>{`Nao temos palavras para estudar :(`}</AdviceText>
                    <Button onClick={handleGoBack}>Ir para lista de palavras</Button>
                </>
            }
            <BasicModal
                open={open}
                handleClose={handleClose}
                wordsData={selectedWord}
                handleSaveWord={handleSaveWord}
                isLoading={buttonLoading}
            />
            <Snackbar open={snackBarOpen} autoHideDuration={1500} onClose={handleCloseSnackBar}>
                <Alert
                    onClose={handleCloseSnackBar}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Palavra adicionada na revisão com sucesso!
                </Alert>
            </Snackbar>
        </Container>
    );
}

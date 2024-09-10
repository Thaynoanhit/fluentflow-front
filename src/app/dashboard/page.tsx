"use client";
import { ListWordsCard } from "@/components/dashboard/ListWordsCard";
import { ListWordCardsContainer } from "./styles";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LoadContainer } from "@/components/general/LoadContainer";
import { api } from "@/services/api";
import { WordsContainer, Title, GridContainer } from "./styles";
import { WordCard } from "@/components/words/WordCard";
import { NavigationWords } from "@/components/words/NavigationWords";
import { Button } from "@mui/material";

interface WordCategoriesProps {
    description: string;
    id: number;
    total_words: number;
}

interface WordsFromCategoryProps {
    id: number;
    word: string;
    status?: string
}

export default function Dashboard() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [wordCategories, setWordCategories] = useState<WordCategoriesProps[]>();
    const [wordsFromCategory, setWordsFromCategory] = useState<WordsFromCategoryProps[]>();
    const [categoryId, setCategoryId] = useState<number>();
    const [userData, setUserData] = useState();
    const [skip, setSkip] = useState(0);

    const handleGetWordsFromCategory = async (category_id: number) => {
        setCategoryId(category_id);
        const params = { customer_id: userData?.user.id, word_category_id: category_id, take: 10, skip: 0 }
        setIsLoading(true);
        const response = await api.post('words/getwords', params);

        if (response.data && response.data.length) {
            setIsLoading(false);
            setWordsFromCategory(response.data);
            console.log(response.data)
        }
    };

    const getWordsFromCategory = async () => {

        const params = { customer_id: userData?.user.id, word_category_id: categoryId, take: 10, skip: skip }
        setIsLoading(true);
        const response = await api.post('words/getwords', params);

        if (response.data && response.data.length) {
            setIsLoading(false);
            setWordsFromCategory(response.data);
            console.log(response.data)
        }
    };

    const getWordCategories = async () => {
        const response = await api.get('words/getwordcategories');
        if (response.data) {
            setWordCategories(response.data.categories);
        }
    }

    const handleSaveWordToStudy = async (word_id: Number) => {

        const word = [{ id: word_id }];

        const params = { customer_id: userData.user.id, words: word, status: 'NEW' }

        try {
            setIsLoading(true);
            await api.post('words/savewords', params);
            getWordsFromCategory();
        } catch (e) {
            console.log(e);
        }
    }

    const handleSaveKnownWord = async (word_id: Number) => {

        const word = [{ id: word_id }];

        const params = { customer_id: userData.user.id, words: word, status: 'LEARNED' }

        try {
            setIsLoading(true);
            await api.post('words/savewords', params);
            getWordsFromCategory()
        } catch (e) {
            console.log(e);
        }
    }

    const getWordsFromAPI = async (skip) => {
        setIsLoading(true);
        try {
            const params = { customer_id: userData?.user.id, word_category_id: categoryId, take: 10, skip: skip }
            const response = await api.post('/words/getwords', params);

            if (response.data) {
                setWordsFromCategory(response.data);
                setIsLoading(false);
            }
        } catch (e) {
            setIsLoading(false);
        }
    }

    const handleNavigateNextRange = async (prox) => {

        try {
            if (prox) {
                if (skip < 2990) {
                    setSkip(skip + 10);
                    getWordsFromAPI(skip + 10);
                }
            } else {
                if (skip >= 10) {
                    setSkip(skip - 10);
                    getWordsFromAPI(skip - 10);
                }
            }
        } catch (e) {
            console.log(e);
        }
    }

    const handleGoBack = () => {
        setWordsFromCategory(null)
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
                    getWordCategories();
                    setIsLoading(false);
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
        <>
            {!wordsFromCategory ?
                <ListWordCardsContainer>
                    <Title>Escolha uma lista de palavras</Title>
                    {wordCategories && wordCategories.map((item, index) => (
                        <ListWordsCard
                            key={index}
                            onClick={() => handleGetWordsFromCategory(item.id)}
                            description={item.description}
                            id={item.id}
                        />
                    ))}
                </ListWordCardsContainer>
                :
                <WordsContainer>
                    <Button onClick={handleGoBack}>Voltar para lista de palavras</Button>
                    <Title>Selecione suas palavras</Title>
                    <GridContainer>
                        {wordsFromCategory && wordsFromCategory.map((item: any) => (
                            <WordCard
                                key={item.id}
                                word={item.word}
                                status={item.status}
                                handleSaveWordsToStudy={() => handleSaveWordToStudy(item.id)}
                                handleSaveKnownWord={() => handleSaveKnownWord(item.id)}
                            />
                        ))}
                    </GridContainer>
                    <NavigationWords skip={skip} take={skip + 10} handleNext={() => handleNavigateNextRange(true)} handlePrevious={() => handleNavigateNextRange(false)} />
                </WordsContainer>}
        </>
    );
}

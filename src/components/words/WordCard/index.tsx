

import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";



import {
    Container,
    Word,
    LearnButton,
    KnowButton,
    ButtonWrapper,
    ButtonTitle,
    AdviceTitle,
    AdviceWrapper
} from './styles';

type WordCardProps = {
    word: string;
    handleSaveWordsToStudy: () => void;
    handleSaveKnownWord: () => void;
    status: "NEW" | "LEARNED" | "STUDYING"
}

export function WordCard({ word, handleSaveWordsToStudy, handleSaveKnownWord, status }: WordCardProps) {
    return (
        <Container>
            <Word>{word}</Word>
            {!status &&
                <ButtonWrapper>
                    <LearnButton onClick={handleSaveWordsToStudy}>
                        <ButtonTitle>Aprender</ButtonTitle>
                    </LearnButton>
                    <KnowButton onClick={handleSaveKnownWord}>
                        <ButtonTitle>Já conheço</ButtonTitle>
                    </KnowButton>
                </ButtonWrapper>
            }
            {status === 'NEW' &&
                <AdviceWrapper>
                    <AdviceTitle>Na área de estudo</AdviceTitle>
                    <FaBook color='#651FFF' />
                </AdviceWrapper>}
            {status === 'LEARNED' &&
                <AdviceWrapper>
                    <AdviceTitle>Já aprendida</AdviceTitle>
                    <FaCheckCircle color='#58CC02' />
                </AdviceWrapper>}
            {status === 'STUDYING' &&
                <AdviceWrapper>
                    <AdviceTitle>Em revisão</AdviceTitle>
                    <FaRotate color='#58CC02' />
                </AdviceWrapper>}
        </Container>
    );
}

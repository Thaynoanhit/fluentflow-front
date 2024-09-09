

import React from 'react';

import { Container, Word, LearnButton, KnowButton, ButtonWrapper, ButtonTitle } from './styles';

type WordCardProps = {
    word: string;
}

export function WordCard({word}: WordCardProps){
    return(
        <Container>
            <Word>{word}</Word>
            <ButtonWrapper>
                <LearnButton>
                    <ButtonTitle>Aprender</ButtonTitle>
                </LearnButton>
                <KnowButton>
                    <ButtonTitle>Já conheço</ButtonTitle>
                </KnowButton>
            </ButtonWrapper>
        </Container>
    );
}

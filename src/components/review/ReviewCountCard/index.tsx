import React from 'react';
import ChevronRight from '../../../assets/img/chevron_right.svg';
import UnitedStatesFlag from '../../../assets/img/united-states-flag.png'
import Image from 'next/image';

import {
    Container,
    ButtonContent,
    Title,
    RightButton,
    ContentRight,
    ImageCardWrapper,
    WordsToReview
} from './styles';

interface ListWordsCard {
    count: number;
    description: string;
    onClick: () => void
}

export function ReviewCountCard({ description, count, onClick }: ListWordsCard) {

    return (
        <Container onClick={onClick}>
            <ImageCardWrapper>
                <Image src={UnitedStatesFlag} width={100} height={123} alt="" />
            </ImageCardWrapper>
            <ButtonContent>
                <ContentRight>
                    <Title>{description}</Title>
                    {count ?
                        <WordsToReview>Palavras para revisar: {count}</WordsToReview> :
                        <WordsToReview>Não Temos Palavras para Revisar Hoje :c </WordsToReview>}
                </ContentRight>
                <RightButton>
                    <Image src={ChevronRight} alt='' width={24} height={24} />
                </RightButton>
            </ButtonContent>
        </Container>
    );
}
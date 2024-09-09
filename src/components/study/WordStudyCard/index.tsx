

import React from 'react';
import ChevronRight from '../../../assets/img/chevron_right.svg';
import { Container, Word, Translation, WordsWrapper, RightButton } from './styles';
import Image from 'next/image';

type WordCardProps = {
    word: string;
    translation: string;
}

export function WordStudyCard({word, translation}: WordCardProps){

    return(
        <Container>
            <WordsWrapper>
                <Word>{word}</Word>
                <Translation>{translation}</Translation>
            </WordsWrapper>
            <RightButton>
                <Image src={ChevronRight} width={24} alt=''/>
            </RightButton>
        </Container>
    );
}


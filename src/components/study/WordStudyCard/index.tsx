

import React from 'react';
import ChevronRight from '../../../assets/img/chevron_right.svg';
import { Container, Word, Translation, WordsWrapper, RightButton } from './styles';
import Image from 'next/image';

type WordCardProps = {
    word: string;
    translation: string;
    handleOpenModal: () => void;
}

export function WordStudyCard({ word, translation, handleOpenModal, words_id }: WordCardProps) {

    const handleOnPress = () => {
        const wordData = { word, translation, words_id }
        handleOpenModal(wordData);
    }

    return (
        <Container onClick={handleOnPress}>
            <WordsWrapper>
                <Word>{word}</Word>
                <Translation>{translation}</Translation>
            </WordsWrapper>
            <RightButton>
                <Image src={ChevronRight} width={24} alt='' />
            </RightButton>
        </Container>
    );
}


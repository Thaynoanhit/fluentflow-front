import React from 'react';
import ChevronRight from '../../../assets/img/chevron_right.svg';
import UnitedStatesFlag from '../../../assets/img/united-states-flag.png'
import Image from 'next/image';
import * as Progress from '@radix-ui/react-progress';


import {
    Container,
    ButtonContent,
    Title,
    RightButton,
    ContentRight,
    ImageCardWrapper
} from './styles';

interface ListWordsCard {
    title: string;
    percent: string;
    image: any;
    onClick: () => void;
}

export function ListWordsCard({ title, percent, image, onClick }: ListWordsCard) {

    return (
        <Container onClick={onClick}>
            <ImageCardWrapper>
                <Image src={UnitedStatesFlag} width={100} height={123} alt=""/>
            </ImageCardWrapper>
            <ButtonContent>
                <ContentRight>
                    <Title>{title}</Title>
                    <Progress.Root value={50} style={{ color: 'red', height: 5}}>
                        <Progress.Indicator />
                    </Progress.Root>
                    <Title>50%</Title>
                </ContentRight>
                <RightButton>
                    <Image src={ChevronRight} alt='' width={24} height={24}/>
                </RightButton>
            </ButtonContent>
        </Container>
    );
}
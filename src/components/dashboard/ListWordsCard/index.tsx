import React from 'react';
import ChevronRight from '../../../assets/img/chevron_right.svg';
import UnitedStatesFlag from '../../../assets/img/united-states-flag.png'
import Image from 'next/image';
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/material';

import {
    Container,
    ButtonContent,
    Title,
    RightButton,
    ContentRight,
    ImageCardWrapper
} from './styles';

interface ListWordsCard {
    description: string;
    id: number;
    onClick: () => void;
}

export function ListWordsCard({ description, id, onClick }: ListWordsCard) {

    return (
        <Container onClick={onClick}>
            <ImageCardWrapper>
                <Image src={UnitedStatesFlag} width={100} height={123} alt="" />
            </ImageCardWrapper>
            <ButtonContent>
                <ContentRight>
                    <Title>{description}</Title>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={25} />
                    </Box>
                </ContentRight>
                <RightButton>
                    <Image src={ChevronRight} alt='' width={24} height={24} />
                </RightButton>
            </ButtonContent>
        </Container>
    );
}
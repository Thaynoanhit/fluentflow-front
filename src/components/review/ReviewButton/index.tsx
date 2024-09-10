import React from 'react';
import SM2Algorithm from '../../../utils/SM2Algorithm';
import { formatDistanceStrict } from 'date-fns';
import { Button } from '@mui/material';
import { ptBR } from 'date-fns/locale/pt-BR';

import {
    Container,
    Title
} from './styles';

export function ReviewButton({ handleSetReviewDate, title, quality, repetitions, previousEaseFactor, previousInterval }) {

    const convertDaysToReadableFormat = (days) => {
        const now = new Date();
        const futureDate = new Date(now);
        futureDate.setDate(now.getDate() + days);
        const unit = days > 30 ? 'month' : 'day';
        return formatDistanceStrict(now, futureDate, { unit: unit, locale: ptBR });
    }

    const sm2 = new SM2Algorithm();
    const sm2cal = sm2.calc(quality, repetitions, previousInterval, previousEaseFactor);
    const nextIntervalFormatted = convertDaysToReadableFormat(sm2cal.interval);

    const handlePressButton = () => {
        handleSetReviewDate(sm2cal);
    }

    return (
        <Button onClick={handlePressButton} variant='contained' sx={title == "Errei" ? { backgroundColor: 'red' } : { backgroundColor: '#58CC02' }}>
            <text>{title} ({nextIntervalFormatted})</text>
        </Button>
    );
}
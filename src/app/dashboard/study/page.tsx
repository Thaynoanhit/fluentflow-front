'use client';
import React from 'react';
import { WordStudyCard } from '@/components/study/WordStudyCard';

import {
    Container
} from './styles';

export default function StudyPage() {
    // Crie o vetor de palavras e traduções
    const wordsList = [
        { word: 'test', translation: 'teste' },
        { word: 'apple', translation: 'maçã' },
        { word: 'book', translation: 'livro' },
        { word: 'car', translation: 'carro' },
        { word: 'house', translation: 'casa' },
        { word: 'computer', translation: 'computador' },
        { word: 'dog', translation: 'cachorro' },
        { word: 'cat', translation: 'gato' },
        { word: 'school', translation: 'escola' },
        { word: 'sun', translation: 'sol' }
    ];

    return (
        <Container>
            {/* Mapeia o vetor para exibir cada palavra com a tradução */}
            {wordsList.map((item, index) => (
                <WordStudyCard key={index} word={item.word} translation={item.translation} />
            ))}
        </Container>
    );
}

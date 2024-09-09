'use client'
import { WordCard } from "@/components/words/WordCard";

import { Container, Title, GridContainer } from "./styles";

export default function WordsPage(){

    const palavras = [
        {word: "car", id: 1},
        {word: "bike", id: 2},
        {word: "orange", id: 3},
        {word: "pear", id: 4},
        {word: "lemon", id: 5},
        {word: "rooftop", id: 6},
        {word: "water", id: 7},
        {word: "monkey", id: 8},
        {word: "chair", id: 9},
        {word: "desk", id: 10}
    ]

    return (
        <Container>
            <Title>Selecione suas palavras</Title>
            <GridContainer>
                {palavras.map((item) => (
                    <WordCard key={item.id} word={item.word} />
                ))}
            </GridContainer>
        </Container>
  );
    
}
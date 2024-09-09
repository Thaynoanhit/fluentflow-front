'use client'
import React from 'react';

import {
    Container,
    BrandTitle,
    InnerContainer,
    CustomerName
} from './styles';

export function Header(){
    return(
        <Container>
            <InnerContainer>
                <BrandTitle>FluentFlow</BrandTitle>
                <CustomerName>Olá, Elias</CustomerName>
            </InnerContainer>
        </Container>
    );
}
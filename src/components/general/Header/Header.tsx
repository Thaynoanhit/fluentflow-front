'use client';
import React, { useEffect, useState } from 'react';
import {
    Container,
    BrandTitle,
    InnerContainer,
    CustomerName
} from './styles';
import { useRouter } from 'next/navigation';

export function Header() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState('');
    const router = useRouter();

    useEffect(() => {
        const userData = localStorage.getItem('userData');

        if (!userData) {
            router.push('/register');
        } else {
            const parsedData = JSON.parse(userData);
            if (parsedData.user && parsedData.token) {
                setUserName(parsedData.user.name || 'Usuário');
                setIsAuthenticated(true);
            } else {
                router.push('/register');
            }
        }
    }, [router]);

    if (!isAuthenticated) {
        return null;
    }

    return (
        <Container>
            <InnerContainer>
                <BrandTitle>FluentFlow</BrandTitle>
                <CustomerName>Olá, {userName}</CustomerName>
            </InnerContainer>
        </Container>
    );
}

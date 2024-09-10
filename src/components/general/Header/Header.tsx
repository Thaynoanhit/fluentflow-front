'use client';
import React, { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import DogAvatar from '../../../assets/img/dog.png';
import { FaSignOutAlt } from "react-icons/fa";
import {
    Container,
    BrandTitle,
    InnerContainer,
    CustomerName,
    AvatarWrapper,
    SignOutButton
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

    const signOut = () => {
        localStorage.removeItem('userData');
        router.push('/');
    };

    if (!isAuthenticated) {
        return null;
    }

    return (
        <Container>
            <InnerContainer>
                <BrandTitle>FluentFlow</BrandTitle>
                <AvatarWrapper>
                    <CustomerName>Olá, {userName}</CustomerName>
                    <Avatar src={DogAvatar.src} alt='' />
                    <SignOutButton onClick={signOut}>
                        <FaSignOutAlt />
                    </SignOutButton>
                </AvatarWrapper>
            </InnerContainer>
        </Container>
    );
}

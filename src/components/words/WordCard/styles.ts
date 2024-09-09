import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    max-width: 300;
    border: 1px solid #EBEDF0;
    border-radius: 1rem;
    padding: .5rem;
    background-color: #FFFFFF;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .5rem;
`;

export const Word = styled.text`
    font-size: 1.5rem;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

export const LearnButton = styled.button`
    padding: .5rem;
    background-color: #651FFF;
    border: none;
    border-radius: .5rem;
    cursor: pointer;
`;

export const KnowButton = styled.button`
    padding: .5rem;
    background-color: #58CC02;
    border: none;
    border-radius: .5rem;
    cursor: pointer;
`;

export const ButtonTitle = styled.text`
    color: #FFFFFF;
    font-weight: 600;
    font-size: 1rem;
`;
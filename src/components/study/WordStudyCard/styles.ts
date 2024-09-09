import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    max-width: 300;
    border: 1px solid #EBEDF0;
    border-radius: 1rem;
    padding: .5rem;
    background-color: #FFFFFF;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
`;

export const WordsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Word = styled.text`
    font-size: 1.5rem;
    font-weight: 400;
`;

export const Translation = styled.text`
    font-size: 1.5rem;
    font-weight: 500;
`;

export const RightButton = styled.div`
    display: flex;
    width: 32px;
    height: 32px;
    border-radius: 16px;
    background-color: #D9D9D9;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;



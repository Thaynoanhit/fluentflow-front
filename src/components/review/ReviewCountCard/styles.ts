import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    overflow: hidden;
    border-radius: 8px;
    align-items: center;
    background-color: #FFFFFF;
    margin-top: 14px;
    border: 1px solid #EBEDF0;
    cursor: pointer;
`;

export const ButtonContent = styled.div`
    display: flex;
    flex: 1;
    padding: 14px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.text`
    font-size: 1.2rem;
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

export const ImageCardWrapper = styled.div`
    height: 123px;
`;

export const ContentRight = styled.div`
    display: flex;
    flex: 1;
    gap: 4px;
    flex-direction: column;
    margin-right: 14px;
`;

export const WordsToReview = styled.text`
    font-weight: 500;
    font-size: 1rem;
    color: #6D6DFA;
`;
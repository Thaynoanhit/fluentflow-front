import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 16px;
    margin-top: 1rem;
    margin-bottom: 100px;
`;

export const Title = styled.h2`
    text-align: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
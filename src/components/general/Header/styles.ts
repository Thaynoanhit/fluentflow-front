import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background-color: #f8f8f8;
  padding: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export  const InnerContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BrandTitle = styled.text`
    font-size: 1.5rem;
`;

export const CustomerName = styled.text`
    font-weight: 500;
    font-size: 1.5rem;
`;
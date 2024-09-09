import styled from 'styled-components';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['500', '600', '700'] 
});

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #f8f8f8;
  padding: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
`;

export const HeaderInnerContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FluentFlowBrand = styled.h2``;

export const FluentFlowBannerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1080px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 600px;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RegisterButton = styled.button`
  display: flex;
  width: 400px;
  justify-content: center;
  background-color: #58CC02;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 1rem;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  box-shadow: inset 0 -2px 0 0 #6d8458;
  font-family: ${poppins.style.fontFamily};

  &:hover {
    background-color: #46a102;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px;
  }
`;

export const HaveAccountButton = styled.button`
  display: flex;
  width: 400px;
  justify-content: center;
  background-color: #651FFF;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 1rem;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  font-family: ${poppins.style.fontFamily};

  &:hover {
    background-color: #520fcc;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px;
  }
`;

export const BannerTitle = styled.h1`
  display: flex;
  width: 400px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

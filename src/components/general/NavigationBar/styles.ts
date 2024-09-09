import styled from "styled-components";

export const NavBar = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1rem;
`;

export const InnerNav = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 16px;
  border: 2px solid #EBEDF0;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
`;

export const ListItem = styled.li<{ isActive: boolean }>`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border-radius: 16px;
  gap: 8px;
  color: #8E8E8F;
  background-color: ${({ isActive }) => (isActive ? '#e0e0e0' : 'transparent')};
  
  &:hover {
    background-color: #e0e0e0;
  }

`;

export const ItemsWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export const Text = styled.span`
  font-size: 1rem;
`;
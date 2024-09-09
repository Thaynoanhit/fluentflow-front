'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavBar = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1rem;
`;

const InnerNav = styled.div`
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

const ListItem = styled.li<{ isActive: boolean }>`
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

const ItemsWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const Text = styled.span`
  font-size: 1rem;
`;

const NavigationBar = () => {
  const [active, setActive] = useState<string | null>('Listas');
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleClick = (text: string) => {
    setActive(active === text ? null : text);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const routes = [
    { name: 'Listas', icon: '/icons/home.png', href: '/dashboard' },
    { name: 'Estudar', icon: '/icons/estudar.png', href: '/dashboard/study/' },
    { name: 'Revisar', icon: '/icons/treinar.png', href: '/Treinar' },
    { name: 'Progresso', icon: '/icons/progresso.png', href: '/dashboard/progress' },
  ];

  return (
    <NavBar>
      <InnerNav>
      <ItemsWrapper>
          {routes.map((item) => (
            <ListItem
              key={item.name}
              isActive={active === item.name}
              onClick={() => handleClick(item.name)}
            >
              <Link href={item.href} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#8E8E8F'}}>
                <Icon src={item.icon} alt={item.name} />
                {(active === item.name || !isSmallScreen) && (
                  <Text>{item.name}</Text>
                )}
              </Link>
            </ListItem>
          ))}
        </ItemsWrapper>
      </InnerNav>
    </NavBar>
  );
};

export default NavigationBar;

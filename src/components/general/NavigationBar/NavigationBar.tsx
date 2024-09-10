'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { NavBar, InnerNav, ItemsWrapper, ListItem, Icon, Text } from './styles';

const NavigationBar = () => {
  const [active, setActive] = useState<string | null>('');
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    setIsAuthenticated(!!userData);
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  if (isAuthenticated === null) return null;

  if (!isAuthenticated) return null;

  const routes = [
    { name: 'Listas', icon: '/icons/home.png', href: '/dashboard' },
    { name: 'Estudar', icon: '/icons/estudar.png', href: '/dashboard/study/' },
    { name: 'Revisar', icon: '/icons/treinar.png', href: '/dashboard/review/' },
    { name: 'Progresso', icon: '/icons/progresso.png', href: '/dashboard/progress' },
  ];

  const handleNavigate = (item) => {
    setActive(item.name);
    router.push(item.href);
  }

  return (
    <NavBar>
      <InnerNav>
        <ItemsWrapper>
          {routes.map((item) => (
            <ListItem
              key={item.name}
              isActive={active === item.name}
              onClick={() => handleNavigate(item)}
            >
              <Link href={item.href} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#8E8E8F', height: '100%' }}>
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

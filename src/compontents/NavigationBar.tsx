'use client'; // Client Component

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './NavigationBar.module.css';

const NavigationBar = () => {
  const [active, setActive] = useState<string | null>(null);
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

  return (
    <nav className={styles.nav}>
      <ul>
        {[
          { name: 'Home', icon: '/icons/home.png', href: '/Home' }, 
          { name: 'Descobrir', icon: '/icons/descobrir.png', href: '/Descobrir' },
          { name: 'Estudar', icon: '/icons/estudar.png', href: '/Estudar' },
          { name: 'Treinar', icon: '/icons/treinar.png', href: '/Treinar' },
          { name: 'Progresso', icon: '/icons/progresso.png', href: '/Progresso' },
          { name: 'Perfil', icon: '/icons/perfil.png', href: '/Perfil' },
        ].map((item) => (
          <li key={item.name} className={active === item.name ? styles.active : ''}>
            <div onClick={() => handleClick(item.name)}>
              <Link href={item.href}>
                <img src={item.icon} alt={item.name} className={styles.icon} />
                {(active === item.name || !isSmallScreen) && (
                  <span className={styles.text}>{item.name}</span>
                )}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
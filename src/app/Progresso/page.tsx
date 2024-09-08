import React from "react";
import styles from "./page.module.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const HomePage: React.FC = () => {

// Valores estáticos

  const userName = "Nome do Usuário"; 
  const joinDate = "01/01/2024"; 

  const palavrasAprendidas = 120;
  const palavrasEmRevisao = 45;
  const palavrasParaEstudo = 30;
  const totalPalavras = palavrasAprendidas + palavrasEmRevisao + palavrasParaEstudo;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.profileContainer}>
        <img
          src="/icons/UserPerfil3.gif"
          alt="Avatar"
          className={styles.avatar}
        />
        <div className={styles.userInfo}>
          <h2 className={styles.profileText}>Perfil</h2>
          <p className={styles.userName}>{userName}</p>
          <p className={styles.joinDate}>{joinDate}</p>
        </div>
      </div>

      <hr className={styles.divider} />

      <h1 className={styles.title}>Estatísticas</h1>

      {/* Seção de palavras descobertas */}
      <div className={styles.statsContainer}>
        <div className={styles.statCard}>
          <div className={styles.iconTextContainer}>
            <img
              src="/icons/PalavrasAprendidas.png"
              alt="Palavras Aprendidas"
              className={styles.statIcon}
            />
            <div className={styles.statText}>
              <h3 className={styles.statTitle}>Palavras Aprendidas</h3>
              <p className={styles.statValue}>{palavrasAprendidas}</p>
            </div>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.iconTextContainer}>
            <img
              src="/icons/Revisar.png"
              alt="Palavras em Revisão"
              className={styles.statIcon}
            />
            <div className={styles.statText}>
              <h3 className={styles.statTitle}>Palavras em Revisão</h3>
              <p className={styles.statValue}>{palavrasEmRevisao}</p>
            </div>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.iconTextContainer}>
            <img
              src="/icons/EstudarPalavra.png"
              alt="Palavras para Estudo"
              className={styles.statIcon}
            />
            <div className={styles.statText}>
              <h3 className={styles.statTitle}>Palavras para Estudo</h3>
              <p className={styles.statValue}>{palavrasParaEstudo}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.totalContainer}>
        <img
          src="/icons/Total.png"
          alt="Total"
          className={styles.totalIcon}
        />
        <div className={styles.totalText}>
          <h3 className={styles.totalTitle}>Total de Palavras</h3>
          <p className={styles.totalValue}>{totalPalavras}</p>
        </div>
      </div>
      <NavigationBar />
    </div>
  );
};

export default HomePage;

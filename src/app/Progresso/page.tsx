import React from "react";
import styles from "./page.module.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const ProgressoPage: React.FC = () => {

  // Valores estáticos
  const palavrasAprendidas = 120;
  const palavrasEmRevisao = 45;
  const palavrasParaEstudo = 30;
  const totalPalavras = palavrasAprendidas + palavrasEmRevisao + palavrasParaEstudo;

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Estatísticas de Apendizagem</h1>
      
      <div className={styles.centralContainer}>
        
        <div className={styles.statCard}>
          <img src="/icons/Palavras_Aprendidas.png" alt="Palavras Aprendidas" className={styles.statIcon} />
          <div className={styles.statText}>
            <h3 className={styles.statTitle}>Palavras Aprendidas</h3>
            <p className={`${styles.statValue} ${styles.palavrasAprendidas}`}>{palavrasAprendidas}</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <img src="/icons/Palavras_Revisão.png" alt="Palavras em Revisão" className={styles.statIcon} />
          <div className={styles.statText}>
            <h3 className={styles.statTitle}>Palavras em Revisão</h3>
            <p className={styles.statValue}>{palavrasEmRevisao}</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <img src="/icons/Palavras_Estudo.png" alt="Palavras para Estudo" className={styles.statIcon} />
          <div className={styles.statText}>
            <h3 className={styles.statTitle}>Palavras para Estudo</h3>
            <p className={styles.statValue}>{palavrasParaEstudo}</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <img src="/icons/Palavras_Total.png" alt="Total de Palavras" className={styles.statIcon} />
          <div className={styles.statText}>
            <h3 className={styles.statTitle}>Total de Palavras</h3>
            <p className={styles.statValue}>{totalPalavras}</p>
          </div>
        </div>
      </div>
      <NavigationBar />
    </div>
  );
};

export default ProgressoPage;

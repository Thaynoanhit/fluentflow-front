'use client'
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { api } from "@/services/api";
import { LoadContainer } from "@/components/general/LoadContainer";

const ProgressoPage: React.FC = () => {

  const router = useRouter();
  const [userData, setUserData] = useState();
  const [learnedData, setLearnedData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Valores estáticos
  const palavrasAprendidas = 120;
  const palavrasEmRevisao = 45;
  const palavrasParaEstudo = 30;
  const totalPalavras = palavrasAprendidas + palavrasEmRevisao + palavrasParaEstudo;

  const getLearnedWords = async (customer_id) => {
    console.log(customer_id)
    const response = await api.post('/words/getlearned', { customer_id })
    if (response.data) {
      setLearnedData(response.data)
      console.log(response.data)
      setIsLoading(false)
    }

  }


  useEffect(() => {
    const checkAuth = () => {
      const userData = localStorage.getItem('userData');
      if (!userData) {
        router.push('/register');
      } else {
        const parsedData = JSON.parse(userData);
        setUserData(parsedData);
        if (!parsedData.user || !parsedData.token) {
          router.push('/register');
        } else {
          getLearnedWords(parsedData.user.id);
        }
      }
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return <LoadContainer />;
  }


  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.title}>Estatísticas de Apendizagem</h2>

      <div className={styles.centralContainer}>

        <div className={styles.statCard}>
          <img src="/icons/Palavras_Aprendidas.png" alt="Palavras Aprendidas" className={styles.statIcon} />
          <div className={styles.statText}>
            <h3 className={styles.statTitle}>Palavras Aprendidas</h3>
            <p className={`${styles.statValue} ${styles.palavrasAprendidas}`}>{learnedData.learnedCount}</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <img src="/icons/Palavras_Revisão.png" alt="Palavras em Revisão" className={styles.statIcon} />
          <div className={styles.statText}>
            <h3 className={styles.statTitle}>Palavras em Revisão</h3>
            <p className={styles.statValue}>{learnedData.learningCount}</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <img src="/icons/Palavras_Estudo.png" alt="Palavras para Estudo" className={styles.statIcon} />
          <div className={styles.statText}>
            <h3 className={styles.statTitle}>Palavras para Estudo</h3>
            <p className={styles.statValue}>{learnedData.newCount}</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <img src="/icons/Palavras_Total.png" alt="Total de Palavras" className={styles.statIcon} />
          <div className={styles.statText}>
            <h3 className={styles.statTitle}>Total de Palavras</h3>
            <p className={styles.statValue}>{learnedData.learnedCount + learnedData.newCount + learnedData.learningCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressoPage;

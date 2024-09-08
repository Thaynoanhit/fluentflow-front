import styles from "@/components/WordsList/WordsList.module.css";

const WordsList = ({words}: any) => {
    return (
      <div className={styles.wordslist}>
        {words.map((w: any) => (
          <div className={styles.word} key={w.id}>
            <p>{w.word}</p>
            <button className={styles.selectionButton} id={styles.shouldLearn}>Aprender</button>
            <button className={styles.selectionButton} id={styles.alreadyKnown}>Já Conheço</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default WordsList;
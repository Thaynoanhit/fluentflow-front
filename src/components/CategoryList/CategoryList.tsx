import styles from './CategoryList.module.css'

function CategoryList({categories}: any) {
    return(
        <div className={styles.categoriesList}>
            <h1>Escolha uma lista de palavras</h1>
            {categories.map((c: any) => (
                <div key={c.id} className={styles.category}>
                    <a href={`/palavras/categoria/${c.id}`}>{c.categoryName}</a>
                     <p className={styles.percentage}>50%</p>
                     <p className={styles.totalWords}>2870 palavras</p>
                </div>
            ))}
        </div>
    );
}

export default CategoryList;
import styles from "@/components/CategoryList.module.css";

function CategoryList({categories}: any) {
    return(
        <div className={styles.categoriesList}>
            <h1>Escolha uma lista de palavras</h1>
            {categories.map((c: any) => (
                <div key={c.id} className={styles.category}>
                    
                    <a href={`/palavras/categoria/${c.id}`}>{c.categoryName}</a>
                    <span
                     style={{float:"right", fontSize:"30px"}}
                     className="material-symbols-outlined">expand_circle_right</span>
                     <p className={styles.percentage}>50%</p>
                     <p className={styles.totalWords}>2870 palavras</p>
                </div>
            ))}
        </div>
    );
}

export default CategoryList;
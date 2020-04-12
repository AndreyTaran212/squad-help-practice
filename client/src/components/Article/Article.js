import React from 'react';
import styles from './Article.module.sass';
import articles from '../../articles';

const Article = () => {

    return (
        <div className={styles.articlesMainContainer}>
            <div className={styles.columnContainer}>

                {articles.map((article, index) => {
                        return (
                            <div className={styles.articleContainer}>
                                <article key={`article${index}`}>
                                    <h4 className={styles.headerArticle}>{article.title}</h4>
                                    <p className={styles.article}>
                                        {article.body}
                                    </p>
                                </article>
                            </div>
                        )
                    }
                )}

            </div>
        </div>



    );
};


export default Article;
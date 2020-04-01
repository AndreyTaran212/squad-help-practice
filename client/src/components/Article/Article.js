import React from 'react';

const Article = (props) => {
    return (
        <div className={props.className.articleContainer}>
            <article>
                <h2 className={props.className.headerArticle}>{props.header}</h2>
                <p className={props.className.article}>{props.article}</p>
            </article>
        </div>

    );
};



export default Article;
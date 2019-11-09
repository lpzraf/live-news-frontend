import React, { useEffect, useState } from 'react';


const News = () => {

    useEffect(() => {
        fetchNews();
    }, [])

    const [newsArticles, setArticles] = useState([])

    const fetchNews = async () => {
        const data = await fetch('')
    
    
        const newsArticles = await data.json();
        console.log(newsArticles.articles)
        setArticles(newsArticles.articles)
    }

    return (
        <div>
            {newsArticles.map(article => (
                <h1>{article.title}</h1>
            ))}
        </div>
    )


}


export default News;
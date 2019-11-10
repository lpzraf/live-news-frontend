import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


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
            {newsArticles.map((article, index) => (
               <li key={article.index}><a href={article.url}>{article.title}</a></li>
            ))}
        </div>
    )


}


export default News;
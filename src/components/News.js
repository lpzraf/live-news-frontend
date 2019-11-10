import React, { useEffect, useState } from 'react';


const News = () => {

    const KEY = process.env.REACT_APP_NEWSAPI_CLIENT_ID;

    useEffect(() => {
        fetchNews();
    }, [])

    const [newsArticles, setArticles] = useState([])

    const fetchNews = async () => {
        const data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${KEY}`)
    
    
        const newsArticles = await data.json();
        console.log(newsArticles.articles)
        setArticles(newsArticles.articles)
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>News</h1>
            {newsArticles.map((article, index) => (    
                <li 
                    style={{ listStyleType: "none" }} 
                    key={index}><a href={article.url}>{index}. {article.title}</a>
                </li>
            ))}
        </div>
    )


}


export default News;
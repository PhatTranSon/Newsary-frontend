import React from "react";
import { Hero } from "../components/hero";
import { useNews } from "../../hooks/news";
import { NewsCard, NewsSection } from "../components/card";
import { Loading } from "../components/loading";

export const Home = () => {
    //Use news hook
    const { 
        articles, 
        error, 
        requestArticles 
    } = useNews();

    //Get the articles
    const loading = articles.length === 0;
    const firstArticle = loading ? [] : articles[0];
    const remainingArticles = loading ? [] : articles.slice(1);

    return (
        <>
            <Hero loading={loading} article={firstArticle}/>
            {
                loading ? 
                <Loading/> :
                <>
                    <NewsSection>
                    {
                        remainingArticles
                            .map((article, index) => <NewsCard key={index} article={article}/>)
                    }
                    </NewsSection>
                </>
            }
        </>
    )
}
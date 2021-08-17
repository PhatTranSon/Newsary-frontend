import React from "react";
import { useNews } from "../../hooks/news";

export const Home = () => {
    //Use news hook
    const { 
        articles, 
        error, 
        requestArticles 
    } = useNews();

    return (
        <>
        
        </>
    )
}
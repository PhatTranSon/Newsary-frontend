import { useEffect, useState } from "react";
import { getNews, getSingleArticle } from "../api/news";

export function useNews(afterId) {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    let currentId = 0;

    //On call -> Get news
    useEffect(() => {
        callApi();
    }, [currentId]);

    //Function to request more articles
    function requestArticles() {
        //Add 10 to current id
        currentId += 10;
    }

    function callApi() {
        getNews(10, currentId)
            .then(news => setArticles([...articles, ...news]))
            .catch(error => setError(error))
    }

    //Return the error and news
    return {
        articles,
        error,
        requestArticles
    };
}

export function useSingleNews(id) {
    const [article, setArticle] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getSingleArticle(id)
            .then(article => setArticle(article))
            .catch(error => setError(error));
    }, []);

    return { 
        article,
        error
    };
}
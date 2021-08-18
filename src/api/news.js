import axios from "axios";

const All_NEWS_URL = "https://articlesfinder.net/news/all";
const SINGLE_NEWS_URL = "https://articlesfinder.net/news/byid";

export function getNews(limit = 10, afterId = 0) {
    return axios.get(All_NEWS_URL, {
        params: {
            "limit": limit,
            "after_id": afterId
        }
    }).then(response => response.data);
}

export function getSingleArticle(id) {
    return axios.get(SINGLE_NEWS_URL, {
        params: {
            "id": [id]
        }
    })
    .then(response => response.data)
    .then(function getFirstArticleIfExists(articles) {
        return articles.length > 0 ? articles[0] : null
    });
}
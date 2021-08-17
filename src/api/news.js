import axios from "axios";

const All_NEWS_URL = "https://articlesfinder.net/news/all";

export function getNews(limit = 10, afterId = 0) {
    return axios.get(All_NEWS_URL, {
        params: {
            "limit": limit,
            "after_id": afterId
        }
    }).then(response => response.data);
}
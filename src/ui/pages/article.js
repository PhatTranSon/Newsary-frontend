import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useSingleNews } from "../../hooks/news";
import { ArticleDisplay } from "../components/article";
import { Loading } from "../components/loading";


export const Article = () => {
    //Get the id of the news
    const { id } = useParams();

    //Get the news
    const { article, error } = useSingleNews(id);

    return (
        article ?
        <ArticleDisplay article={article}/> :
        <Loading />
    )
};
import { useParams } from "react-router-dom";
import styled from "styled-components";

export const Article = () => {
    //Get the id of the news
    const { id } = useParams();

    return <h1>{ id }</h1>
};
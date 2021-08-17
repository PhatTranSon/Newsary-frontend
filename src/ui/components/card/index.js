import React from "react";
import styled from "styled-components";


const Article = styled.article`
    display: flex;
    flex-flow: row nowrap;
    padding: 1.5rem 0;

    & div {
        margin-left: 1rem;
    }

    border-bottom: 3px dashed #eee;
`;

const ImageSection = styled.div`
    flex: 0 0 50%;
`;

const Image = styled.img`
    width: 100%;
`;

const Title = styled.h3`
    font-weight: 600;
`;

const Paragraph = styled.p`

`;

const Date = styled.p`

`;

export const NewsSection = styled.section`
    width: 60%;
    margin: 0 auto;
`


export const NewsCard = ({ article }) => {
    //Get attribute
    const { id, title, image, authors, url, text, date } = article;

    //Render
    return (
        <Article>
            <ImageSection>
                <Image src={image} alt="News image"/>
            </ImageSection>
            <div>
                <Title>{ title }</Title>
                <Paragraph></Paragraph>
                <Date>{ date }</Date>
            </div>
        </Article>
    )
}
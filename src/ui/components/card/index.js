import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { trimParagraph } from "../../../helper/string";
import { Loading } from "../loading";
import { connect } from "react-redux";


const Article = styled.article`
    display: flex;
    flex-flow: row nowrap;
    padding: 1.5rem 0;

    & div {
        margin-left: 1rem;
    }

    & a {
        text-decoration: none;
        color: ${props => props.theme.black};
    }

    border-bottom: 3px dashed #eee;

    &:last-child {
        border-bottom: none;
    }
`;

const ImageSection = styled.div`
    flex: 0 0 50%;
`;

const Image = styled.img`
    width: 100%;
    border-radius: 5px;
`;

const Title = styled.h3`
    font-weight: 600;
`;

const Paragraph = styled.p`
    margin-bottom: 1rem;
`;

const Date = styled.p`

`;

const NewsWrapper = styled.section``;

const NewsCard = ({ article }) => {
    //Get attribute
    const { id, title, image, text, date } = article;

    //Render
    return (
        <Article>
            <ImageSection>
                <Image src={image} alt="News image"/>
            </ImageSection>
            <div>
                <Link to={`/news/${id}`}>
                    <Title>{ title }</Title>
                </Link>

                <Paragraph>{ trimParagraph(text) }</Paragraph>
                <Date>{ date }</Date>
            </div>
        </Article>
    )
}

const NewsSection = ({ articles, loading }) => {
    return (
        loading ?
        <Loading /> :
        <NewsWrapper>
        {
            articles.map((article, index) => <NewsCard key={index} article={article}/>)
        }
        </NewsWrapper>
    );
};

function mapStateToProps(state) {
    return {
        articles: state.homePage.allArticles.length > 0 ? state.homePage.allArticles.slice(1) : [],
        loading: state.homePage.loading,
    };
}

export const ConnectedNewsSection = connect(mapStateToProps)(NewsSection);
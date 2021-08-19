import styled from "styled-components";
import React from "react";
import { Button } from "../button";
import { PlaceHolderHero } from "./placeholder";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


//News components
const Wrapper = styled.section`
    height: 80vh;
    position: relative;
    border-radius: 0 0 50% 50% / 50px;
    overflow: hidden;
`;

const Veil = styled.div`
    height: 100%;
    width: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3));
    position: absolute;
    top: 0;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-position: top;
    object-fit: cover;
    position: absolute;
    top: 0;
    z-index: -1;
`;

const TextSection = styled.div`
    width: 80%;
    position: absolute;
    left: 50%;
    bottom: 20%;
    transform: translateX(-50%);
    color: white;

    & > h1 {
        font-size: 2.2rem;
    }

    & > h2 {
        font-size: 1rem;
        font-weight: normal;
        margin-bottom: 1rem;
    }
`;

export const Hero = ({ article }) => {
    return (
        article ?
        <>
            <Wrapper>
                <Image src={article.image} alt="Articles image"/>
                <Veil/>
                <TextSection>
                    <h1>{article.title}</h1>
                    <h2>By {article.authors}</h2>
                    <Link to={`/news/${article.id}`}>
                        <Button>See more</Button>
                    </Link>
                </TextSection>
            </Wrapper>
        </> :
        <>
            <PlaceHolderHero />
        </> 
    )
}

function mapStateToProps(state) {
    return {
        article: state.homePage.allArticles.length > 0 ? state.homePage.allArticles[0] : null
    };
}

export const ConnectedHero = connect(mapStateToProps)(Hero);
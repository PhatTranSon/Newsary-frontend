import styled from "styled-components";
import React from "react";
import { Button } from "../button";

//Placeholder components
const Placeholder = styled.section`
    height: 80vh;
    border-radius: 0 0 50% 50% / 50px;
    background: linear-gradient(to top, #e76f51, #f4a261);
`;

const TextPlaceholder = styled.div`
    width: 80%;
    position: absolute;
    left: 50%;
    bottom: 20%;
    transform: translateX(-50%);

    & > h1 {
        height: 2rem;
        width: 50%;
        background-color: #eee;
        margin-bottom: 1rem;
    }

    & > h2 {
        height: 1rem;
        width: 30%;
        background-color: #eee;
    }
`;

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

export const Hero = ({ article, loading }) => {
    const { title, image, authors } = article;

    return (
        loading ?
        <>
            <Placeholder>
                <TextPlaceholder>
                    <h1></h1>
                    <h2></h2>
                </TextPlaceholder>
            </Placeholder>
        </> :
        <>
            <Wrapper>
                <Image src={image} alt="Articles image"/>
                <Veil/>
                <TextSection>
                    <h1>{title}</h1>
                    <h2>By {authors}</h2>
                    <Button>See more</Button>
                </TextSection>
            </Wrapper>
        </>
    )
}
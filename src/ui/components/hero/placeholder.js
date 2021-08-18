import styled from "styled-components";

//Placeholder components
const PlaceholderWrapper = styled.section`
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
`;

const H1Placeholder = styled.div`
    height: 2rem;
    width: 50%;
    background-color: #eee;
    margin-bottom: 1rem;
`;

const H2Placeholder = styled.div`
    height: 1rem;
    width: 30%;
    background-color: #eee;
`;

export const PlaceHolderHero = () => {
    return (
        <PlaceholderWrapper>
            <TextPlaceholder>
                <H1Placeholder></H1Placeholder>
                <H2Placeholder></H2Placeholder>
            </TextPlaceholder>
        </PlaceholderWrapper>
    );
};
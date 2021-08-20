import styled from "styled-components";
import emptyIcon from "../../../image/empty.svg";

const Wrapper = styled.div`
    display: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Icon = styled.img`
    width: 30%;
    height: auto;
    margin-top: 2rem;
`;

const Text = styled.p`
    font-size: 1.5rem;
    color: ${props => props.theme.grayColorDark};
    margin-top: 0.5rem;
`;

export const EmptyList = () => {
    return (
        <Wrapper>
            <Icon src={emptyIcon} alt="No word searched icon"/>
            <Text>No words searched</Text>
        </Wrapper>
    )
}
import styled from "styled-components";

export const Icon = styled.h1`
    font-weight: 400;
    font-size: ${props => props.big ? "3rem" : "1.5rem"};
    color: #e76f51;

    &::after {
        content: "";
        display: block;
        width: ${props => props.big ? "8rem" : "4rem"};
        height: 3px;
        background-color: ${props => props.theme.primaryColorLight}
    }
`;
import styled from "styled-components";

export const Button = styled.a`
    background-color: ${props => (props.inverted ? props.theme.gray : props.theme.primaryColor)};
    color: ${props => (props.inverted ? props.theme.primaryColor : props.theme.white)};
    display: block;
    text-decoration: none;
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    &:hover {
        background-color: ${props => (props.inverted ? props.theme.grayColorDark : props.theme.primaryColorDark)};
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    flex-flow: row nowrap;
`;
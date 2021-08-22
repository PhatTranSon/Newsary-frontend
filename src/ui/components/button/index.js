import styled from "styled-components";

export const Button = styled.button`
    background-color: ${props => (props.inverted ? props.theme.gray : props.theme.primaryColor)};
    color: ${props => (props.inverted ? props.theme.primaryColor : props.theme.white)};
    font-family: 'Poppins', sans-seriff;
    display: inline-block;
    text-decoration: none;
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin-right: 0.5rem;
    cursor: pointer;
    border: none;
    width: ${props => props.w || "auto"};

    &:hover {
        background-color: ${props => (props.inverted ? props.theme.grayColorLight : props.theme.primaryColorDark)};
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    flex-flow: row nowrap;
`;
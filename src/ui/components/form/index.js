import styled from "styled-components";
import { Button } from "../button";


export const Form = styled.form`
    min-width: 40%;
    background-color: ${props => props.theme.white};
    border-radius: 1rem;
    box-shadow: 0 0 1.5rem ${props => props.theme.grayColorDark};
    padding: 1rem;
    margin: 5rem auto;
`;

export const FormTitle = styled.h1`
    font-weight: 300;
    color: ${props => props.theme.primaryColor};
    margin-bottom: 0.25rem;
`;

export const FormSubtitle = styled.h2`
    font-weight: 300;
    font-size: 1rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.grayColorDark};
`;

export const FormGroup = styled.div`
    position: relative;
`;

export const FormLabel = styled.label`
    font-size: 1rem;
    display: block;
    margin-bottom: 0.25rem;
    position: absolute;
    top: 1rem;
    opacity: 0;
    left: 0.75rem;
    background-color: white;
    color: ${props => props.theme.primaryColor};
`;

export const FormInput = styled.input`
    display: block;
    width: 100%;
    font-family: 'Poppins', sans-seriff;
    font-size: 1rem;
    padding: 0.75rem;
    border: 2px solid ${props => props.theme.gray};
    border-radius: 0.5rem;
    margin-bottom: .75rem;

    &:focus {
        outline: 2px solid ${props => props.theme.primaryColor};
    }

    &:focus::placeholder {
        color: transparent;
    }

    &:focus + label {
        animation-name: moveLabelUp;
        animation-count: 1;
        animation-duration: .2s;
        animation-fill-mode: forwards;
    }

    @keyframes moveLabelUp {
        0% {
            top: 1rem;
            opacity: 0;
        }

        100% {
            top: -0.8rem;
            opacity: 1;
        }
    }
`;

export const FormSelect = styled.select`
    display: block;
    width: 100%;
    font-family: 'Poppins', sans-seriff;
    font-size: 1rem;
    padding: 0.75rem;
    border: 2px solid ${props => props.theme.gray};
    border-radius: 0.5rem;
    margin-bottom: .75rem;
`;

export const FormButton = styled(Button)`
    width: 100%;
    font-size: 1rem;
`;
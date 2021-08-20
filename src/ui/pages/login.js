import styled from "styled-components";
import { Form, FormButton, FormGroup, FormInput, FormLabel, FormSubtitle, FormTitle } from "../components/form";

const Wrapper = styled.main`
    width: 100%;
    min-height: 90vh;
    background: linear-gradient(
        to bottom right, 
        ${props => props.theme.primaryColorLight},
        ${props => props.theme.primaryColorDark});
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Login = () => {
    return (
        <Wrapper>
            <Form>
                <FormTitle>Log in to your account</FormTitle>
                <FormSubtitle>Use your email and password</FormSubtitle>
                <FormGroup>
                    <FormInput type="email" placeholder="Email" id="email"/>
                    <FormLabel htmlFor="email">Email</FormLabel>
                </FormGroup>

                <FormGroup>
                    <FormInput type="password" placeholder="Password" id="password"/>
                    <FormLabel htmlFor="password">Password</FormLabel>
                </FormGroup>
                <FormButton>Log in</FormButton>
            </Form>
        </Wrapper>
    )
}

export const ConnectedLogin = Login;
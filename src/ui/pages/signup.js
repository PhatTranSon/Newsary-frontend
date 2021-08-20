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

const SignUp = () => {
    return (
        <Wrapper>
            <Form>
                <FormTitle>Create an account</FormTitle>
                <FormSubtitle>Create an account to save words and articles</FormSubtitle>
                <FormGroup>
                    <FormInput type="text" placeholder="Username" id="username"/>
                    <FormLabel htmlFor="username">Username</FormLabel>
                </FormGroup>

                <FormGroup>
                    <FormInput type="text" placeholder="Full name" id="fullname"/>
                    <FormLabel htmlFor="fullname">Full name</FormLabel>
                </FormGroup>

                <FormGroup>
                    <FormInput type="email" placeholder="Email" id="email"/>
                    <FormLabel htmlFor="email">Email</FormLabel>
                </FormGroup>

                <FormGroup>
                    <FormInput type="password" placeholder="Password" id="password"/>
                    <FormLabel htmlFor="password">Password</FormLabel>
                </FormGroup>

                <FormGroup>
                    <FormInput type="text" placeholder="City" id="city"/>
                    <FormLabel htmlFor="city">City</FormLabel>
                </FormGroup>

                <FormGroup>
                    <FormInput type="text" placeholder="Country" id="country"/>
                    <FormLabel htmlFor="country">Country</FormLabel>
                </FormGroup>

                <FormButton>Create account</FormButton>
            </Form>
        </Wrapper>
    )
}

export const ConnectedSignUp = SignUp;
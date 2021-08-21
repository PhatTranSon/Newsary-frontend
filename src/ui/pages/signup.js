import { connect } from "react-redux";
import styled from "styled-components";
import { requestSignup } from "../../state/mutations";
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

const SignUp = ({ signup }) => {
    function onFormSubmit(element) {
        //Prevent redirection
        element.preventDefault();

        //Get form data
        const formData = new FormData(element.target);

        //Get the field from form
        const user = {
            username: formData.get("username"),
            fullname: formData.get("fullname"),
            password: formData.get("password"),
            email: formData.get("email"),
            city: formData.get("city"),
            country: formData.get("country")
        }

        //Call request signup
        signup(user);
    }

    return (
        <Wrapper>
            <Form onSubmit={onFormSubmit}>
                <FormTitle>Create an account</FormTitle>
                <FormSubtitle>Create an account to save words and articles</FormSubtitle>
                <FormGroup>
                    <FormInput type="text" placeholder="Username" id="username" name="username"/>
                    <FormLabel htmlFor="username">Username</FormLabel>
                </FormGroup>

                <FormGroup>
                    <FormInput type="text" placeholder="Full name" id="fullname" name="fullname"/>
                    <FormLabel htmlFor="fullname">Full name</FormLabel>
                </FormGroup>

                <FormGroup>
                    <FormInput type="email" placeholder="Email" id="email" name="email"/>
                    <FormLabel htmlFor="email">Email</FormLabel>
                </FormGroup>

                <FormGroup>
                    <FormInput type="password" placeholder="Password" id="password" name="password"/>
                    <FormLabel htmlFor="password">Password</FormLabel>
                </FormGroup>

                <FormGroup>
                    <FormInput type="text" placeholder="City" id="city" name="city"/>
                    <FormLabel htmlFor="city">City</FormLabel>
                </FormGroup>

                <FormGroup>
                    <FormInput type="text" placeholder="Country" name="country"/>
                    <FormLabel htmlFor="country">Country</FormLabel>
                </FormGroup>

                <FormButton>Create account</FormButton>
            </Form>
        </Wrapper>
    )
}

function mapStateToProps(state, ownProps) {
    return {
        redirect: state.authentication.register.redirect
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        signup: function(user) {
            dispatch(requestSignup(user));
        }
    };
}

export const ConnectedSignUp = connect(mapStateToProps, mapDispatchToProps)(SignUp);
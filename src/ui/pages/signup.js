import { connect } from "react-redux";
import styled from "styled-components";
import { Loading } from "../components/loading";
import { 
    changeSignupCity, 
    changeSignupCountry, 
    changeSignupEmail, 
    changeSignupFullname, 
    changeSignupUsername, 
    changeSignupPassword, 
    requestSignup 
} from "../../state/mutations/auth";
import { Form, FormButton, FormGroup, FormInput, FormLabel, FormSubtitle, FormTitle } from "../components/form";
import { Redirect } from "react-router-dom";

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

const SignUp = ({ 
    fullname,
    username,
    email,
    password,
    city,
    country,
    updateFullname,
    updateUsername,
    updateEmail,
    updatePassword,
    updateCity,
    updateCountry,
    signup, 
    loading, 
    redirect 
}) => {
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
        redirect ?
        <Redirect to="/login"/> :
        <Wrapper>
            <Form onSubmit={onFormSubmit}>
                {
                    loading ?
                    <Loading /> :
                    <>
                        <FormTitle>Create an account</FormTitle>
                        <FormSubtitle>Create an account to save words and articles</FormSubtitle>
                        <FormGroup>
                            <FormInput type="text" placeholder="Username" id="username" name="username" 
                                value={username} onChange={updateUsername} />
                            <FormLabel htmlFor="username">Username</FormLabel>
                        </FormGroup>

                        <FormGroup>
                            <FormInput type="text" placeholder="Full name" id="fullname" name="fullname"
                                value={fullname} onChange={updateFullname}/>
                            <FormLabel htmlFor="fullname">Full name</FormLabel>
                        </FormGroup>

                        <FormGroup>
                            <FormInput type="email" placeholder="Email" id="email" name="email"
                                value={email} onChange={updateEmail}/>
                            <FormLabel htmlFor="email">Email</FormLabel>
                        </FormGroup>

                        <FormGroup>
                            <FormInput type="password" placeholder="Password" id="password" name="password"
                                value={password} onChange={updatePassword}/>
                            <FormLabel htmlFor="password">Password</FormLabel>
                        </FormGroup>

                        <FormGroup>
                            <FormInput type="text" placeholder="City" id="city" name="city"
                                value={city} onChange={updateCity}/>
                            <FormLabel htmlFor="city">City</FormLabel>
                        </FormGroup>

                        <FormGroup>
                            <FormInput type="text" placeholder="Country" name="country"
                                value={country} onChange={updateCountry}/>
                            <FormLabel htmlFor="country">Country</FormLabel>
                        </FormGroup>

                        <FormButton>Create account</FormButton>
                    </>
                }
            </Form>
        </Wrapper>
    )
}

function mapStateToProps(state, ownProps) {
    return state.authentication.register;
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        signup: function(user) {
            dispatch(requestSignup(user));
        },
        updateFullname: function(element) {
            dispatch(changeSignupFullname(element.target.value));
        },
        updateUsername: function(element) {
            dispatch(changeSignupUsername(element.target.value));
        },
        updateEmail: function(element) {
            dispatch(changeSignupEmail(element.target.value));
        },
        updatePassword: function(element) {
            dispatch(changeSignupPassword(element.target.value));
        },
        updateCity: function(element) {
            dispatch(changeSignupCity(element.target.value));
        },
        updateCountry: function(element) {
            dispatch(changeSignupCountry(element.target.value));
        }
    };
}

export const ConnectedSignUp = connect(mapStateToProps, mapDispatchToProps)(SignUp);
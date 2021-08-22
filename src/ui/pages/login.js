import { connect } from "react-redux";
import styled from "styled-components";
import { Loading } from "../components/loading";
import { changeLoginEmail, changeLoginPassword, requestLogin } from "../../state/mutations/auth";
import { Form, FormButton, FormGroup, FormInput, FormLabel, FormSubtitle, FormTitle } from "../components/form";
import { Link, Redirect } from "react-router-dom";

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

const SignUpMessage = styled.p`
    color: ${props => props.theme.grayColorDark};
    text-align: center;
    margin-bottom: 1rem;

    & a:link {
        text-decoration: none;
        color: ${props => props.theme.secondaryColor};
    }

    & a:visited {
        color: ${props => props.theme.primaryColorDark};
    }
`;

const Login = ({
    email,
    password,
    loading, 
    loggedIn,
    token,
    updateEmail,
    updatePassword,
    login
}) => {
    function onFormSubmit(event) {
        //Prevent redirect
        event.preventDefault();
        //Call login
        login();
    }

    return (
        (
            loggedIn ?
            <Redirect to="/" /> :
            <Wrapper>
                <Form onSubmit={onFormSubmit}>
                    {
                        loading ?
                        <Loading /> :
                        <>
                            <FormTitle>Log in to your account</FormTitle>
                            <FormSubtitle>Use your email and password</FormSubtitle>
                            <FormGroup>
                                <FormInput type="email" placeholder="Email" id="email" 
                                    value={email} onChange={updateEmail} required/>
                                <FormLabel htmlFor="email">Email</FormLabel>
                            </FormGroup>

                            <FormGroup>
                                <FormInput type="password" placeholder="Password" id="password"
                                    value={password} onChange={updatePassword} required/>
                                <FormLabel htmlFor="password">Password</FormLabel>
                            </FormGroup>

                            <SignUpMessage>
                                Don't have an account ? <Link to="/register">Sign up</Link>
                            </SignUpMessage>

                            <FormButton>Log in</FormButton>
                        </>
                    }
                </Form>
            </Wrapper>
        )
    )
}

function mapStateToProps(state, ownProps) {
    return state.authentication.login;
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        updateEmail: function(element) {
            dispatch(changeLoginEmail(element.target.value));
        },
        updatePassword: function(element) {
            dispatch(changeLoginPassword(element.target.value));
        },
        login: function() {
            dispatch(requestLogin());
        }
    };
}

export const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
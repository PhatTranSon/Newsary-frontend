import { connect } from "react-redux";
import styled from "styled-components"
import { ErrorMessage } from "../error";
import { Loading } from "../loading";

//Welcome sign
const Welcome = styled.h1`
    font-weight: 400;
    font-size: 2rem;
    color: ${props => props.theme.grayColorDark};
`;

const WelcomeName = styled.span`
    color: ${props => props.theme.primaryColor};
`;

const WelcomeUser = ({
    userLoading,
    userError,
    user,
}) => {
    return (
        userError ?
        <ErrorMessage>Can not retrieve user</ErrorMessage> :
        (
            userLoading ?
            <Loading small/> :
            <Welcome>
                Welcome back, <WelcomeName>{ user.fullname }</WelcomeName>
            </Welcome>
        )
    );
}

function mapStateToProps(state, ownProps) {
    //Get user
    const { user } = state;

    return {
        userLoading: user.loading,
        userError: user.error,
        user: {
            username: user.username,
            fullname: user.fullname,
            email: user.email,
            city: user.city,
            country: user.country
        }
    };
}   

export const ConnectedWelcomeUser = connect(mapStateToProps, null)(WelcomeUser);
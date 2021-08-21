import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { requestLogout } from "../../../state/mutations";
import { Button, ButtonGroup } from "../button";
import { Icon } from "../typography";
import { Redirect } from "react-router-dom";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0.75rem;
    border-bottom: 2px solid #eee;
`;

const Header = ({ loggedIn, logout }) => {
    const [loggedOut, setLoggedOut] = useState(false);

    function logUserOut() {
        setLoggedOut(true);
        logout();
    }

    return (
        <>
            <Nav>
                <Icon>Newsary</Icon>
                <ButtonGroup>
                    {
                        loggedIn ?
                        <>
                            <Link to="/dashboard">
                                <Button inverted>My Dashboard</Button>
                            </Link>
                            <Button onClick={logUserOut}>Log out</Button>
                        </> :
                        <>
                            <Link to="/login">
                                <Button inverted>Log in</Button>
                            </Link>
                    
                            <Link to="/register">
                                <Button>Sign up</Button>
                            </Link>
                        </>
                    }
                </ButtonGroup>
            </Nav>
            {
                loggedOut ? <Redirect to="/"/> : null
            }
        </>
    )
}

function mapStateToProps(state, ownProps) {
    return {
        loggedIn: state.authentication.login.loggedIn
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        logout: function() {
            dispatch(requestLogout());
        }
    };
}

export const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, ButtonGroup } from "../button";
import { Icon } from "../typography";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0.75rem;
    border-bottom: 2px solid #eee;
`;

export const Header = () => {
    return (
        <Nav>
            <Icon>Newsary</Icon>
            <ButtonGroup>
                <Link to="/login">
                    <Button inverted>Log in</Button>
                </Link>
        
                <Link to="/register">
                    <Button>Sign up</Button>
                </Link>
            </ButtonGroup>
        </Nav>
    )
}
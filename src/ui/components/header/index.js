import React from "react";
import styled from "styled-components";
import { Button, ButtonGroup } from "../button";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0.75rem;
    border-bottom: 2px solid #eee;
`;

const Icon = styled.h1`
    font-weight: 400;
    font-size: 1.5rem;
    color: #e76f51;

    &::after {
        content: "";
        display: block;
        width: 50%;
        height: 3px;
        background-color: ${props => props.theme.primaryColorLight}
    }
`;

export const Header = () => {
    return (
        <Nav>
            <Icon>Newsary</Icon>
            <ButtonGroup>
                <Button href="https://google.com" inverted>Log in</Button>
                <Button href="https://google.com">Sign up</Button>
            </ButtonGroup>
        </Nav>
    )
}
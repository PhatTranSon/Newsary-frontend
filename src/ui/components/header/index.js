import React from "react";
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
                <Button href="https://google.com" inverted>Log in</Button>
                <Button href="https://google.com">Sign up</Button>
            </ButtonGroup>
        </Nav>
    )
}
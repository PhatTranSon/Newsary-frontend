import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useOutsideClick } from "../../../hooks/ui";

const MenuWrapper = styled.div`
    display: ${props => props.visible ? "block" : "none"};
    position: absolute;
    top: ${props => props.y}px;
    left: ${props => props.x}px;
    padding: 0.5rem 0;
    z-index: 10;
    border-radius: 10px;
    background-color: ${props => props.theme.white};
    box-shadow: 0 0 1rem ${props => props.theme.gray};
`;

const MenuList = styled.ul`
    list-style-type: none;
`;

const MenuListItem = styled.li`
    cursor: pointer;
    padding: 0.5rem 1rem;
    transition: all linear .01s;

    &:hover {
        background-color: ${props => props.theme.primaryColorDark};
        color: ${props => props.theme.white}
    }
`;


const TextMenu = ({ visible, x, y }) => {
    return (
        <MenuWrapper visible={visible} x={x} y={y}>
            <MenuList>
                <MenuListItem>Look it up</MenuListItem>
            </MenuList>
        </MenuWrapper>
    );
}

function mapStateToProps(state, ownProps) {
    return {
        visible: state.articlePage.menu.visible,
        x: state.articlePage.menu.x,
        y: state.articlePage.menu.y
    };
}

export const ConnectedTextMenu = connect(mapStateToProps)(TextMenu);
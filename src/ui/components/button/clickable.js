import styled from "styled-components";
import { useEffect, useState } from "react";

const Button = styled.button`
    flex: 0 0 40%;
    padding: 1rem;
    background-color: ${
        props => {
            if (props.background) {
                return props.background
            } else {
                return props.theme.gray;
            }
        }
    };
    color: ${
        props => {
            if (props.background) {
                return props.theme.white
            } else {
                return props.theme.black;
            }
        }
    };
    margin: 1rem 0;
    border-radius: .5rem;
    border: none;
    box-shadow: 0 .5rem 0 ${props => props.theme.grayColorShadow};
    cursor: pointer;
    font-size: 1.5rem;

    &:hover {
        background-color: ${
            props => {
                if (props.background) {
                    return props.background
                } else {
                    return props.theme.grayColorLight;
                }
            }
        };
    }

    &:active {
        box-shadow: none;
        transform: translateY(0.5rem);
    }
`;

export const ClickableButton = ({ onClick, color, content, number }) => {
    const [changeColor, setChangeColor] = useState(false);

    function onButtonClick() {
        setChangeColor(true);
        onClick();
    }

    useEffect(() => {
        setChangeColor(false);
    }, [number])

    return (
        <Button 
            background={changeColor ? color : null}
            onClick={onButtonClick}>
        { content }
        </Button>
    );
}
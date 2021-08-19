import { useEffect } from "react";
import styled from "styled-components";


const Paragraph = styled.div`
    &::selection {
        background-color: ${props => props.theme.primaryColor};
        color: ${props => props.theme.white};
    }

    &::-moz-selection {
        background-color: ${props => props.theme.primaryColor};
        color: ${props => props.theme.white};
    }
`;

export const TextHighlightable = ({ content, onHighlight }) => {
    function onMouseUp() {
        //Get selection
        const selection = window.getSelection();

        //Get the text and coordinates
        if (selection.rangeCount > 0) {
            const selectionRange = selection.getRangeAt(0);
            const text = selection.toString();
            const coords = selectionRange.getBoundingClientRect();

            //Call highlight
            if (text.length > 0) {
                onHighlight({
                    text,
                    coords: {
                        x: coords.x + coords.width + window.scrollX,
                        y: coords.y + coords.height + window.scrollY
                    }
                });
            }
        }
    }

    useEffect(() => {
        //Add highlight event
        window.addEventListener("mouseup", onMouseUp);
        //Remove highlight event
        return () => window.removeEventListener("mouseup", onMouseUp);
    }, [])

    return (
        <Paragraph>{ content }</Paragraph>
    )
}
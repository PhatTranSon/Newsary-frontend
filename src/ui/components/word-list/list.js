import styled from "styled-components";

const Wrapper = styled.div`
    width: 20vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: ${props => props.theme.white};
    border-right: 2px solid ${props => props.theme.gray};
    z-index: 15;
`;

export const List = ({ visible }) => {
    return (
        visible ?
        <Wrapper>
            
        </Wrapper> :
        null
    )
};
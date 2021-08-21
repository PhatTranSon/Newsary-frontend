import styled from "styled-components";


export const CardWrapper = styled.div`
    background-color: ${props => props.theme.white};
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 1.5rem ${props => props.theme.gray};
    margin-bottom: 1rem;
`;
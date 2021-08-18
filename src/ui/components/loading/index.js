import styled from "styled-components";


export const Loading = styled.div`
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    border: 5px solid black;
    border-top: 5px solid transparent;
    margin: 5rem auto;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }   
    }
`;
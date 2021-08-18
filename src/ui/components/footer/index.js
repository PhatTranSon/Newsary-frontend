import styled from "styled-components";
import { breakpoints } from "../../styling/theme";
import { Icon } from "../typography";


const Wrapper = styled.footer`
    display: flex;
    flex-flow: row nowrap;
    padding: 2rem; 
    border-top: 2px solid #eee;

    ${breakpoints.sm} {
        flex-flow: column nowrap;
    }
`;

const IconSection = styled.div`
    flex: 0 0 33%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${breakpoints.sm} {
        margin-bottom: 2rem;
    }
`;

const LinkSection = styled.div`
    flex: 0 0 33%;
    display: flex;
    justify-content: center;
    align-items: center;

    & ul {
        list-style-type: none;
    }

    & h3 {
        margin-bottom: 1.5rem;
    }

    & li {
        color: ${props => props.theme.grayColorDark};
    }

    & li:hover {
        color: ${props => props.theme.black}
    }

    ${breakpoints.sm} {
        flex: 0 0 100%;
        text-align: center;
        margin-bottom: 2rem;

        & h3 {
            margin-bottom: 1rem;
        }
    }
`;

export const Footer = () => {
    return (
        <Wrapper>
            <IconSection>
                <Icon big>Newsary</Icon>
            </IconSection>

            <LinkSection>
                <div>
                    <h3>Website</h3>
                    <nav>
                        <ul>
                            <li>Read all news</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                </div>
            </LinkSection>

            <LinkSection>
                <div>
                    <h3>Account</h3>
                    <nav>
                        <ul>
                            <li>Login</li>
                            <li>Sign up</li>
                        </ul>
                    </nav>
                </div>
            </LinkSection>
        </Wrapper>
    )
}
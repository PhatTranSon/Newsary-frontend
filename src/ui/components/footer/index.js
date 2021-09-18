import styled from "styled-components";
import { breakpoints } from "../../styling/theme";
import { Icon } from "../typography";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
library.add(faHome, faEnvelope, faPhone)

const FooterWrapper = styled.footer`
    padding: 2rem;
    border-top: 2px solid #eee;
`;

const Wrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
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

    & a {
        text-decoration: none;
        color: ${props => props.theme.black};
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

const CopyrightSection = styled.div`
    margin-top: 2rem;
    text-align: center;
    & strong {
        color: #e76f51;
        font-size: 1.2rem;
    }
`;
export const Footer = () => {
    return (
        <FooterWrapper>
            <Wrapper>
                <IconSection>
                    <Icon big>Newsary</Icon>
                </IconSection>

                <LinkSection>
                    <div>
                        <h3>Website</h3>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/privacy_policy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/term_of_service">
                                        Term of Service
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </LinkSection>
                <LinkSection>
                    <div>
                        <h3>Contact</h3>
                        <nav>
                            <p>
                                <FontAwesomeIcon icon={faHome} style={{marginRight: "8px"}} /> Address : District 7, HCM City, Vietnam
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} style={{marginRight: "8px"}} /> Email: newsaryforeveryone@gmail.com
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faPhone} style={{marginRight: "8px"}} /> Phone Num: +84 012345678
                            </p>       
                        </nav>
                    </div>
                </LinkSection>
                
            </Wrapper>
            <CopyrightSection>
                &#169; Copyright 2021 All Rights Reserved By: <strong> Newsary</strong>
            </CopyrightSection>
        </FooterWrapper>
        
    )
}
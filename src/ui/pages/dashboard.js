import {
    Link,
    Route,
    Switch,
    useRouteMatch
} from "react-router-dom";
import styled from "styled-components";
import bookImage from "../../image/book.svg";
import quizImage from "../../image/quiz.svg";
import { ConnectedCollection } from "./collection";
import { Collections } from "./collections";
import { ConnectedCreateCollection } from "./createcollections";
import { ConnectedQuiz } from "./quizchoose";

const GridWrapper = styled.section`
    display: grid;
    grid-template-columns: 15% 85%;
    min-height: 100vh;
    max-width: 100vw;
`;  

const PanelWrapper = styled.nav`
    background-color: ${props => props.theme.white};
    border-right: 2px solid ${props => props.theme.gray};
`;

const Panel = styled.ul`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    list-style-type: none;
`;

const PanelItem = styled.li`
    text-align: center;
    width: 100%;
    cursor: pointer;
    padding: 1rem 0;

    & a {
        text-decoration: none;
    }

    & img {
        width: 3rem;
        margin-bottom: 0.5rem;
    }

    & h3 {
        font-size: 1rem;
        font-weight: 400;
        color: ${props => props.theme.grayColorDark};
    }

    &:hover {
        background-color: ${props => props.theme.gray};
    }
`;

const Main = styled.div`
    padding: 2rem;
    background-color: ${props => props.theme.grayColorLight};
`;

const DashBoard = () => {
    //Match url
    const { url } = useRouteMatch();

    return (
        <GridWrapper>
            <PanelWrapper>
                <Panel>
                    <PanelItem>
                        <Link to={`${url}`}>
                            <img src={bookImage} alt="Word collection icon"/>
                            <h3>Word collection</h3>
                        </Link>
                    </PanelItem>

                    <PanelItem>
                        <Link to={`${url}/quiz`}>
                            <img src={quizImage} alt="Quiz icon"/>
                            <h3>Quiz</h3>
                        </Link>
                    </PanelItem>
                </Panel>
            </PanelWrapper>
            <Main>
                <Switch>
                    <Route exact path={`${url}`}>
                        <Collections/>
                    </Route>

                    <Route path={`${url}/quiz`}>
                        <ConnectedQuiz/>
                    </Route>

                    <Route path={`${url}/createcollection`}>
                        <ConnectedCreateCollection />
                    </Route>

                    <Route path={`${url}/collections/:collectionId`}
                        component={ConnectedCollection}/>
                </Switch>
            </Main>
        </GridWrapper>
    );
}

export const ConnectedDashboard = (DashBoard);
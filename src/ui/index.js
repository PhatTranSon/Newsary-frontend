import React from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { ConnectedHome } from "./pages/home";
import { GlobalStyle } from "./styling/global";
import { theme } from "./styling/theme";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import { Article } from "./pages/article";
import { Provider } from "react-redux";
import { store } from "../state";

export const App = () => {
    return (
        <Router>
            <Provider store={store}>
                <GlobalStyle/>
                <ThemeProvider theme={theme}>
                    <Header/>
                    <Switch>
                        <Route path="/news/:id" children={<Article />}/>
                        <Route exact path="/">
                            <ConnectedHome />
                        </Route>
                    </Switch>
                    <Footer/>
                </ThemeProvider>
            </Provider>
        </Router>
    )
}
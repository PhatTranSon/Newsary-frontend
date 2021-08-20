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
import { ConnectedErrorMessage } from "./components/error";
import { ConnectedSignUp } from "./pages/signup";
import { ConnectedLogin } from "./pages/login";

export const App = () => {
    return (
        <Router>
            <Provider store={store}>
                <GlobalStyle/>
                <ThemeProvider theme={theme}>
                    <Header/>
                    <ConnectedErrorMessage />
                    <Switch>
                        <Route path="/news/:id" children={<Article />}/>
                        <Route exact path="/">
                            <ConnectedHome />
                        </Route>
                        <Route path="/register">
                            <ConnectedSignUp />
                        </Route>
                        <Route path="/login">
                            <ConnectedLogin />
                        </Route>
                    </Switch>
                    <Footer/>
                </ThemeProvider>
            </Provider>
        </Router>
    )
}
import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { ConnectedHeader } from "./components/header";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
import { GlobalStyle } from "./styling/global";
import { theme } from "./styling/theme";
import {
    Route,
    Switch
} from "react-router-dom";
import { Article } from "./pages/article";
import { connect } from "react-redux";
import { ConnectedMessage } from "./components/message";
import { ConnectedSignUp } from "./pages/signup";
import { ConnectedLogin } from "./pages/login";
import { ConnectedPrivateRoute } from "./components/authroute";
import { ConnectedDashboard } from "./pages/dashboard";
import {
    setAppStarted
} from "../state/mutations/ui";
import About from "./pages/about/about";
import TermOfService from "./pages/termofservice";
import PrivacyPolicy from "./pages/privacypolicy";

export const App = ({ startApp }) => {
    useEffect(() => {
        startApp();
    });

    return (
        <>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <ConnectedHeader />
                <ConnectedMessage />
                <Switch>
                    <Route path="/news/:id" children={<Article />}/>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/register">
                        <ConnectedSignUp />
                    </Route>
                    <Route path="/login">
                        <ConnectedLogin />
                    </Route>
                    <ConnectedPrivateRoute path="/dashboard">
                        <ConnectedDashboard />
                    </ConnectedPrivateRoute>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/privacy_policy">
                        <PrivacyPolicy />
                    </Route>
                    <Route path="/term_of_service">
                        <TermOfService />
                    </Route>
                </Switch>
                <Footer/>
            </ThemeProvider>
        </>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        startApp: function() {
            dispatch(setAppStarted());
        }
    }
};

export const ConnectedApp = connect(null, mapDispatchToProps)(App);
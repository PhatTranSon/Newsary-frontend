import React from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
import { GlobalStyle } from "./styling/global";
import { theme } from "./styling/theme";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import { Article } from "./pages/article";

export const App = () => {
    return (
        <Router>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <Header/>
                <Switch>
                    <Route path="/news/:id" children={<Article />}/>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                </Switch>
                <Footer/>
            </ThemeProvider>
        </Router>
    )
}
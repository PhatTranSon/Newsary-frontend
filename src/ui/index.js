import React from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
import { GlobalStyle } from "./styling/global";
import { theme } from "./styling/theme";

export const App = () => {
    return (
        <>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <Header/>
                <Home/>
                <Footer/>
            </ThemeProvider>
        </>
    )
}
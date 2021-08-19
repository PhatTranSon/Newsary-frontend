import React, { useEffect } from "react";
import { ConnectedHero } from "../components/hero";
import { ConnectedNewsSection } from "../components/card";
import { connect } from "react-redux";
import { requestArticles } from "../../state/mutations";
import { Button } from "../components/button";
import { Layout } from "../components/layout";

const Home = ({ render, getArticles }) => {
    useEffect(() => {
        if (render) getArticles();
    });

    return (
        <>
            <ConnectedHero/>
            <Layout w="60%">
                <ConnectedNewsSection />
                <Button w="100%" onClick={getArticles}>Load more</Button>
            </Layout>
        </>
    )
};

function mapStateToProps(state) {
    return {
        render: state.homePage.allArticles.length === 0
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getArticles: function() {
            dispatch(requestArticles());
        }
    }
};

export const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);

import React from "react";
import { ConnectedHero } from "../components/hero";
import { ConnectedNewsSection } from "../components/card";
import { Layout } from "../components/layout";
import { ConnectedWelcomeBanner } from "../components/welcome";

export const Home = () => {
    return (
        <>
            <ConnectedWelcomeBanner />
            <ConnectedHero/>
            <Layout w="60%">
                <ConnectedNewsSection />
            </Layout>
        </>
    )
};

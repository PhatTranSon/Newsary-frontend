import React from "react";
import { ConnectedHero } from "../components/hero";
import { ConnectedNewsSection } from "../components/card";
import { Layout } from "../components/layout";

export const Home = () => {
    return (
        <>
            <ConnectedHero/>
            <Layout w="60%">
                <ConnectedNewsSection />
            </Layout>
        </>
    )
};

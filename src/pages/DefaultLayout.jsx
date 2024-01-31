import { Navigate } from "react-router-dom";
import { UseStateContext } from "../context/AuthContextProvider";
import { Dashboard } from "../layouts";
import {
    About,
    Footer,
    FrequentlyAskedQuestion,
    HowToMint,
    JoinCommunitySection,
    LatestWork,
    MeetTheArtist,
    Roadmap,
} from "../uiFragments";

// import { useEffect, useState } from "react";

const DefaultLayout = () => {
    document.title = "Twopence - Home Page";

    // redirect to guest layout if token isn't set
    const { userToken } = UseStateContext();

    if (!userToken) {
        return <Navigate to="/guest" />;
    }

    return (
        <Dashboard>
            <section className="app-page-inner">
                <section className="home_page_sec">
                    <HowToMint />
                    <About />
                    <LatestWork />
                    <Roadmap />
                    <MeetTheArtist />
                    <FrequentlyAskedQuestion />
                    <JoinCommunitySection />
                    <Footer />
                </section>
            </section>
        </Dashboard>
    );
};

export default DefaultLayout;

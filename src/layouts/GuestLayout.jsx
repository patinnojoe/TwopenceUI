import { Link, Navigate } from "react-router-dom";
import { UseStateContext } from "../context/AuthContextProvider";
import { NftGallery } from "../components";
import { FaArrowRightLong } from "react-icons/fa6";

import {
    divider,
    gradientLandingPage,
    orangeBall,
    orangeBallBlur,
    starTwinkle,
    violetBall,
} from "../assets";

const GuestLayout = () => {
    // redirect to homepage if user token is set
    const { userToken } = UseStateContext();
    if (userToken) {
        return <Navigate to="/" />;
    }
    return (
        <main className="landing-page-main">
            {/* landing page head area */}
            <header className="landing-page-header">
                <section>
                    <img
                        src={orangeBallBlur}
                        alt=""
                        className="orange-blur-ball"
                    />
                    <img src={violetBall} alt="" className="violet-ball" />
                    <img
                        src={violetBall}
                        alt=""
                        className="violet-ball-right"
                    />
                    <img
                        src={orangeBall}
                        alt=""
                        className="orange-ball-right"
                    />
                    <img src={starTwinkle} alt="" className="star-twinkle" />
                    <img
                        src={starTwinkle}
                        alt=""
                        className="star-twinkle-right"
                    />
                    <img
                        src={orangeBall}
                        alt=""
                        className="orange-ball-left-lower"
                    />

                    <img
                        src={gradientLandingPage}
                        alt=""
                        className="gradient-blur-image"
                    />
                    <img
                        src={violetBall}
                        alt=""
                        className="violet-ball-lower-right"
                    />
                    <div className="logo-container">
                        <img
                            src="https://themegenix.net/wp/nerko-preview/assets/images/nerko-icon.svg"
                            alt="twopince logo"
                        />
                        <h1 className="twopince-logo-text text-center">
                            TwoPince
                        </h1>
                        <h1 className="text-center twopince-logo-text">
                            NFT - Crypto
                            <br /> Interchange Center
                        </h1>
                    </div>
                </section>

                {/* sgn up sign in container */}
                <section className="sign-up-sign-in-container">
                    <Link
                        className="sign-up-btn gradient-filled-btn"
                        to="/register"
                    >
                        Sign Up
                    </Link>
                    <Link
                        className="sign-in-btn gradient-hover-btn "
                        to="/login"
                    >
                        Sign In
                    </Link>
                </section>
            </header>

            <img src={divider} alt="" className="divider" />

            <NftGallery />

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    padding: "1rem 0",
                }}
            >
                <Link className="gradient-filled-btn d-flex align-items-center gap-2 ">
                    View in Opensea
                    <FaArrowRightLong
                        style={{ width: "20px", height: "20px" }}
                    />
                </Link>
            </div>
        </main>
    );
};

export default GuestLayout;

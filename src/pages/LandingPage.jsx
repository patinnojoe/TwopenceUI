import {
    divider,
    gradientLandingPage,
    orangeBall,
    orangeBallBlur,
    starTwinkle,
    violetBall,
} from "../assets";
import { NftGallery } from "../components";

const LandingPage = () => {
    document.title = "Welcome to Twopince 🎉🎊🥳";
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
                    <a className="sign-up-btn gradient-filled-btn"> Sign Up</a>
                    <a className="sign-in-btn gradient-hover-btn ">Sign In</a>
                </section>
            </header>

            <img src={divider} alt="" className="divider" />

            <NftGallery />
        </main>
    );
};

export default LandingPage;

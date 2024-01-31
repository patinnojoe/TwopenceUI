import { Link } from "react-router-dom";
import { SiDiscord } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa6";
const Footer = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="footer-container position-relative">
            <img
                className="eth-img"
                src="https://themegenix.net/nerko/wp-content/uploads/2022/12/ethereum-01.png"
                alt=""
            />
            <img
                src="https://themegenix.net/nerko/wp-content/uploads/2022/12/x.png"
                alt=""
                className="cancel_img"
            />
            <img
                src="https://themegenix.net/nerko/wp-content/uploads/2022/12/circle-03.png"
                alt=""
                className="orange_ball"
            />
            <img
                src="https://themegenix.net/nerko/wp-content/uploads/2022/12/circle-01.png"
                alt=""
                className="tiny-ball-top"
            />
            <div className="d-flex flex-column gap-3 align-items-center w-100">
                <img
                    src="https://themegenix.net/wp/nerko-preview/assets/images/nerko-icon.svg"
                    alt=""
                />

                <p className="text-center">
                    We make it easy to Discover, Invest and
                    <br className="d-lg-block d-none" /> manage all your NFTs at
                    one place.
                </p>

                <div className="follow-us-container">
                    <Link className="link" to="">
                        <SiDiscord className="icon" />
                    </Link>

                    <Link className="link" to="">
                        <IoLogoTwitter className="icon" />
                    </Link>
                    <Link className="link" to="">
                        <FaTelegramPlane className="icon" />
                    </Link>
                </div>
                <div className="main_footer">
                    <small className="clr-light fnt-11">
                        &copy;2023 Twopence. All rights resevered.
                    </small>

                    <div className="d-flex align-items-center gap-3">
                        <Link className="clr-light fnt-13">Privacy policy</Link>
                        <Link className="clr-light fnt-13">Terms of use</Link>
                        <button onClick={handleScrollToTop}>
                            <FaArrowUp style={{ fill: "#ffffff91" }} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

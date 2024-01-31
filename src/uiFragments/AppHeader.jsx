import { IoLogoTwitter } from "react-icons/io";
import { SiDiscord } from "react-icons/si";
import { Link } from "react-router-dom";
import { FaWallet } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { useEffect, useState } from "react";

import PropTypes from "prop-types";
const AppHeader = (props) => {
    // scroll state
    const [isScrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled down (you can adjust the threshold)
            const scrolled = window.scrollY > 50;
            setScrolled(scrolled);
        };

        // Add event listener for scroll
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`app-main-header ${isScrolled ? "scrolled" : ""}`}>
            {/* logo for large screen */}
            <img
                className="app-header-logo  d-none d-lg-block"
                src="https://themegenix.net/wp/nerko-preview/assets/images/nerko-icon.svg"
                alt="twopince logo"
            />

            {/* logo for small screens */}
            <img
                className="app-header-logo small-screen d-block d-lg-none"
                src="https://themegenix.net/wp/nerko-preview/assets/images/nerko-icon.svg"
                alt="twopince logo"
            />

            <ul className="header-link-container d-none d-lg-flex">
                {/* for home */}
                <li>
                    <Link className="header-link" to="">
                        Home
                    </Link>
                </li>
                {/* for minting */}
                <li>
                    <Link className="header-link" to="">
                        Minting
                    </Link>
                </li>

                {/* for About */}

                <li>
                    <Link className="header-link" to="">
                        About
                    </Link>
                </li>

                {/* for collection */}
                <li>
                    <Link className="header-link" to="">
                        Collection
                    </Link>
                </li>

                {/* for road map */}
                <li>
                    <Link className="header-link" to="">
                        Road Map
                    </Link>
                </li>
                {/* for blog */}
                <li>
                    <Link className="header-link" to="">
                        Blog
                    </Link>
                </li>

                {/* for twitter */}
                <li>
                    <Link className="header-link header-icon" to="">
                        <IoLogoTwitter className="icon" />
                    </Link>
                </li>
                {/* for discord */}
                <li>
                    <Link className="header-link header-icon" to="">
                        <SiDiscord className="icon" />
                    </Link>
                </li>

                {/* for connect wallet */}
                <li>
                    <Link className="header-link" to="">
                        <button className="gradient-hover-btn connect-wallet-btn">
                            Connect wallet
                        </button>
                    </Link>
                </li>
            </ul>

            {/* show in small screens */}
            <div className="d-flex d-lg-none">
                <ul className="header-link-container">
                    {/* twitter */}
                    <li>
                        <Link className="header-link header-icon" to="">
                            <IoLogoTwitter className="icon" />
                        </Link>
                    </li>
                    {/* for discord */}
                    <li>
                        <Link className="header-link header-icon" to="">
                            <SiDiscord className="icon" />
                        </Link>
                    </li>

                    {/* for wallet */}
                    <li>
                        <Link className="header-link header-icon" to="">
                            <FaWallet className="icon wallet" />
                        </Link>
                    </li>

                    {/* menu */}
                    <li>
                        <BiCategory
                            className="menu-btn"
                            onClick={props.ToggleSidebar}
                        />
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default AppHeader;

// prop validation

AppHeader.propTypes = {
    ToggleSidebar: PropTypes.func,
};

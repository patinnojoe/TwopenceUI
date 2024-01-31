import { IoMdClose } from "react-icons/io";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const AppSideBar = (props) => {
    return (
        <aside className="side-bar">
            <div className="d-flex justify-content-between align-items-center p-3">
                <img
                    src="https://themegenix.net/wp/nerko-preview/assets/images/nerko-icon.svg"
                    alt=""
                    className="side-bar-logo"
                    width={40}
                    height={40}
                />
                <IoMdClose
                    color="#741ff5"
                    onClick={props.ToggleSidebar}
                    className="close-sidebar-btn"
                />
            </div>
            <ul className="sidebar-link-container ">
                {/* for home */}
                <li>
                    <Link to="" className="sidebar-links ">
                        <span>Home</span>
                    </Link>
                </li>

                {/* for minting */}

                <li>
                    <Link to="" className="sidebar-links ">
                        <span>Minting</span>
                    </Link>
                </li>

                {/* for about */}

                <li>
                    <Link to="" className="sidebar-links ">
                        <span>About</span>
                    </Link>
                </li>

                {/* for collection */}
                <li>
                    <Link to="" className="sidebar-links ">
                        <span>Collection</span>
                    </Link>
                </li>

                {/* for roadmap */}
                <li>
                    <Link to="" className="sidebar-links ">
                        <span>Roadmap</span>
                    </Link>
                </li>

                {/* for blog */}
                <li>
                    <Link to="" className="sidebar-links ">
                        <span>Blog</span>
                    </Link>
                </li>
            </ul>

            {/* social media link */}
            <div className="d-flex flex-wrap align-items-center py-4 px-3 gap-3">
                <Link className="side-bar-social-links">
                    <FaFacebookF className="icon" />
                </Link>

                <Link className="side-bar-social-links">
                    <IoLogoTwitter className="icon" />
                </Link>

                <Link className="side-bar-social-links">
                    <BsInstagram className="icon" />
                </Link>

                <Link className="side-bar-social-links">
                    <BsDiscord className="icon" />
                </Link>

                <Link className="side-bar-social-links">
                    <FaTelegramPlane className="icon" />
                </Link>
            </div>
        </aside>
    );
};

export default AppSideBar;

// prop validation

AppSideBar.propTypes = {
    ToggleSidebar: PropTypes.func,
};

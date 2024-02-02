import { IoLogoTwitter } from 'react-icons/io';
import { SiDiscord } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { FaWallet } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaUser } from 'react-icons/fa6';
import { IoSettingsSharp } from 'react-icons/io5';
import { BiLogOut } from 'react-icons/bi';

import PropTypes from 'prop-types';
import { userProfilePng } from '../assets';
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
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`app-main-header ${isScrolled ? 'scrolled' : ''}`}>
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
            <button className="gradient-hover-btn connect-wallet-btn">Connect wallet</button>
          </Link>
        </li>

        {/* profile */}

        <Dropdown className="profile_dropdown_toggle">
          <Dropdown.Toggle variant="" id="dropdown-basic">
            <div className="profile-container">
              <img src={userProfilePng} alt="" className="user_profile_img" />
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu className="profile_menu">
            <Dropdown.Item className="item">
              <div className="d-flex align-items-center gap-1 ">
                <img src={userProfilePng} alt="" className="user_profile_img" />
                <div className="d-flex flex-column ">
                  <p className=" fnt-16 fw-bold">Username</p>
                  <p className=" fnt-14">UserEmail@gmail</p>
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item href="/profile" className="item">
              <div className="d-flex align-items-center gap-2">
                <FaUser />
                <span>Profile</span>
              </div>
            </Dropdown.Item>
            <Dropdown.Item href="" className="item">
              <div className="d-flex align-items-center gap-2">
                <IoSettingsSharp />
                <span>Settings</span>
              </div>
            </Dropdown.Item>

            <Dropdown.Item href="" className="item">
              <div className="d-flex align-items-center gap-2">
                <BiLogOut style={{ fill: '#ef0000', width: '18px', height: '18px' }} />
                <span>Log out</span>
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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
            <BiCategory className="menu-btn" onClick={props.ToggleSidebar} />
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

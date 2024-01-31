import PropTypes from "prop-types";
import { AppHeader, AppSideBar, HeroSection } from "../uiFragments";
import { useState } from "react";

const Dashboard = (props) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    // side bar toggle func
    const ToggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <main className="position-relative">
            {/* header area */}
            <HeroSection>
                <AppHeader ToggleSidebar={ToggleSidebar} />
            </HeroSection>

            {/* render sidebar */}
            <div
                className={`sidebar-container ${
                    isSidebarOpen ? "sidebar-open" : ""
                }`}
            >
                {isSidebarOpen && (
                    <div
                        className="sidebar-overlay"
                        onClick={ToggleSidebar}
                    ></div>
                )}
                <AppSideBar ToggleSidebar={ToggleSidebar} />
            </div>

            {props.children}
        </main>
    );
};

Dashboard.propTypes = {
    children: PropTypes.node,
};

export default Dashboard;

/* eslint-disable react/prop-types */
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { roadmapData } from "../data/roadmapData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import { divider } from "../assets";

const Roadmap = () => {
    useEffect(() => {
        const handleResize = () => {
            // Adjust the number of slides to show based on the screen width
            // const newSlidesToShow = window.innerWidth <= 767 ? 1 : 3;

            const windowWidth = window.innerWidth;
            let newSlidesToShow;
            if (windowWidth <= 767) {
                newSlidesToShow = 1;
            } else if (windowWidth <= 1024) {
                newSlidesToShow = 2;
            } else {
                newSlidesToShow = 3;
            }
            setSlidesToShow(newSlidesToShow);
        };

        // Initial setup
        handleResize();

        // Listen for window resize events
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const [slidesToShow, setSlidesToShow] = useState(1);
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: slidesToShow,
    };
    return (
        <section className="twopence_roadmap_container">
            <h1 className="text-center main-header">Twopence RoadMap</h1>
            <div className="slidder_container">
                <Slider {...settings}>
                    {roadmapData.map((data, index) => (
                        <div key={index}>
                            <RoadmapCards data={data} />
                        </div>
                    ))}
                </Slider>
            </div>

            <img src={divider} height="80px" width="80px" />
        </section>
    );
};

export default Roadmap;

export function RoadmapCards({ data }) {
    return (
        <div className="roadmap_card">
            <header className="d-flex align-items-center justify-content-between">
                <p className="text-gradient">PHASE {data.phase} </p>
                <div className="percentage_indicator">
                    <span className="percentage_value">{data.percentage}</span>
                    <span>%</span>
                </div>
            </header>
            <p className="fw-bold fnt-30">{data.title}</p>
            <p className="clr-light fnt-13">{data.description}</p>
            <hr className="divider_line" />

            <ul className="list_container">
                {data.steps.map((step, index) => (
                    <li key={index} className="list">
                        <span>
                            <IoIosCheckmarkCircleOutline
                                style={{
                                    fill: "#ff00ea",
                                    width: "20px",
                                    height: "20px",
                                }}
                            />
                        </span>
                        <span className="clr-light fnt-12 mt-1">{step}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

import { useState } from "react";
import PropTypes from "prop-types";

const FlipCard = (props) => {
    const [isFlipped, setFlipped] = useState("");
    const handleClick = () => {
        setFlipped(!isFlipped);
    };
    return (
        <div
            className={` general_card flip-card ${
                isFlipped ? "flipped" : ""
            } h-100`}
            onClick={handleClick}
        >
            <div className="flip_card_general_inner">
                <div className="card-overlay"></div>

                {props.children}
            </div>
        </div>
    );
};

export default FlipCard;

FlipCard.propTypes = {
    children: PropTypes.node,
};

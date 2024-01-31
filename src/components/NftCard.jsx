import { useState } from "react";
import PropTypes from "prop-types";

const NftCard = (props) => {
    const [isFlipped, setFlipped] = useState("");
    const handleClick = () => {
        setFlipped(!isFlipped);
    };
    return (
        <div
            className={`nft-card flip-card ${isFlipped ? "flipped" : ""}`}
            onClick={handleClick}
        >
            <div className="flip-card-inner">
                <div className="card-overlay"></div>
                <div className=" front-view flip-card-front">
                    <img src={props.imageURL} alt="" className="nft-img" />
                    {/* <p className="nft-author">{props.nftAuthor}</p> */}
                    <div className="nft-head-details">
                        <p className="nft-name">{props.nftName}</p>
                        <p className="nft-pub-date">{props.nftPubDate}</p>
                    </div>
                </div>

                <div className="flip-card-back">
                    <section className="d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <span> Total volumes Sold: </span>
                            <span className="fw-bold">{props.totalSales}</span>
                        </div>
                        <div>
                            <span> Total Volume Minted: </span>
                            <span className="fw-bold">{props.totalVolume}</span>
                        </div>
                        <div>
                            <span> Network Type : </span>
                            <span className="fw-bold">{props.networkType}</span>
                        </div>

                        <div>
                            <span> Authors Address : </span>
                            <span className="fw-bold">{props.nftAuthor}</span>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default NftCard;

// prop validation
NftCard.propTypes = {
    imageURL: PropTypes.string,
    nftName: PropTypes.string,
    nftPubDate: PropTypes.string,
    totalSales: PropTypes.string,
    totalVolume: PropTypes.string,
    networkType: PropTypes.string,
    nftAuthor: PropTypes.string,
};

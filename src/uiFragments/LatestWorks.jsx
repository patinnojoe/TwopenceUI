import { Link } from "react-router-dom";
import FlipCard from "./FlipCard";
import { FaArrowRightLong } from "react-icons/fa6";
import PropTypes from "prop-types";
import { divider } from "../assets";

const LatestWork = () => {
    return (
        <div className="latest_work_container mb-3">
            <h2 className="main-header text-center">Latest artworks</h2>
            <div className="row g-5custom w-100">
                <LatestFlipCard
                    imageURL="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_01.jpg"
                    nftName=" #PMetaverse"
                    nftPubDate="14-23-2023"
                    totalSales="20m"
                    totalVolume="100m"
                    networkType="Georlic"
                    nftCardArtist="Micheal Less"
                    nftCardName="TheNative"
                />

                <LatestFlipCard
                    imageURL="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_02.jpg"
                    nftName=" #Polly Doll"
                    nftPubDate="14-23-2023"
                    totalSales="20m"
                    totalVolume="100m"
                    networkType="Georlic"
                    nftCardArtist="Micheal Less"
                    nftCardName="TheNative"
                />

                <LatestFlipCard
                    imageURL="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_08.jpg"
                    nftName=" #Polly Doll"
                    nftPubDate="14-23-2023"
                    totalSales="20m"
                    totalVolume="100m"
                    networkType="Georlic"
                    nftCardArtist="Micheal Less"
                    nftCardName="TheNative"
                />

                <LatestFlipCard
                    imageURL="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_03.jpg"
                    nftName="#Alec Art"
                    nftPubDate="14-23-2023"
                    totalSales="20m"
                    totalVolume="100m"
                    networkType="Georlic"
                    nftCardArtist="Micheal Less"
                    nftCardName="YazoiLup"
                />

                <LatestFlipCard
                    imageURL="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_04.jpg"
                    nftName="#Alec Art"
                    nftPubDate="14-23-2023"
                    totalSales="20m"
                    totalVolume="100m"
                    networkType="Georlic"
                    nftCardArtist="Micheal Less"
                    nftCardName="GeorgZvic"
                />

                <LatestFlipCard
                    imageURL="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_05.jpg"
                    nftName="#Saphyre"
                    nftPubDate="14-23-2023"
                    totalSales="20m"
                    totalVolume="100m"
                    networkType="Georlic"
                    nftCardArtist="Jeremiah Way"
                    nftCardName="CryptoX"
                />

                <LatestFlipCard
                    imageURL="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_06.jpg"
                    nftName="#Charcuterie"
                    nftPubDate="14-23-2023"
                    totalSales="20m"
                    totalVolume="100m"
                    networkType="Georlic"
                    nftCardArtist="Jeremiah Way"
                    nftCardName="Texira"
                />

                <LatestFlipCard
                    imageURL="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_07.jpg"
                    nftName="#Paradise"
                    nftPubDate="14-23-2023"
                    totalSales="20m"
                    totalVolume="100m"
                    networkType="Georlic"
                    nftCardArtist="Nekodimus"
                    nftCardName="CryptoX"
                />
            </div>

            <Link className="gradient-filled-btn">
                View in Opensea
                <FaArrowRightLong style={{ width: "20px", height: "20px" }} />
            </Link>

            <div className="mt-5">
                <img src={divider} alt="" height="80px" width="80px" />
            </div>
        </div>
    );
};
export default LatestWork;

export function LatestFlipCard(props) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-11">
            <div className="card_main_div w-100 h-100">
                <FlipCard>
                    <div className="latest_work_card">
                        <div className="flip-card-front">
                            <img
                                src={props.imageURL}
                                alt=""
                                className="image"
                            />
                            <div className="text_container mt-2">
                                <h5 className="hover_color_purple fnt-14">
                                    {props.nftCardName}
                                </h5>
                                <p className="fnt-13">
                                    By
                                    <span className="hover_color_purple ">
                                        {props.nftCardArtist}
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="flip-card-back">
                            <section className="d-flex flex-column justify-content-center align-items-center">
                                <div>
                                    <span> Total volumes Sold: </span>
                                    <span className="fw-bold">
                                        {props.totalSales}
                                    </span>
                                </div>
                                <div>
                                    <span> Total Volume Minted: </span>
                                    <span className="fw-bold">
                                        {props.totalVolume}
                                    </span>
                                </div>
                                <div>
                                    <span> Network Type : </span>
                                    <span className="fw-bold">
                                        {props.networkType}
                                    </span>
                                </div>

                                <div>
                                    <span> Authors Address : </span>
                                    <span className="fw-bold">
                                        {props.nftAuthor}
                                    </span>
                                </div>
                            </section>
                        </div>
                    </div>
                </FlipCard>
            </div>
        </div>
    );
}

LatestFlipCard.propTypes = {
    imageURL: PropTypes.string,
    nftName: PropTypes.string,
    nftPubDate: PropTypes.string,
    totalSales: PropTypes.string,
    totalVolume: PropTypes.string,
    networkType: PropTypes.string,
    nftCardArtist: PropTypes.string,
    nftAuthor: PropTypes.string,
    nftCardName: PropTypes.string,
};

import { divider } from "../assets";

const JoinCommunitySection = () => {
    return (
        <div className="join-community-container">
            <div
                className="bg"
                style={{
                    backgroundImage:
                        'url("https://themegenix.net/nerko/wp-content/uploads/2022/12/collection_cta.png")',
                }}
            ></div>
            <div className="position-relative">
                <h2 className="main-header text-center">
                    Lets Start
                    <br className="d-lg-block d-none" /> Minting
                </h2>

                <img
                    src="https://themegenix.net/nerko/wp-content/uploads/2022/12/circle-01.png"
                    alt=""
                    className="indigo_ball"
                />

                <img
                    src="https://themegenix.net/nerko/wp-content/uploads/2022/12/bitcoin-01.png"
                    alt=""
                    className="bitcoin_img"
                />

                <img
                    src="https://themegenix.net/nerko/wp-content/uploads/2022/12/ethereum-02.png"
                    alt=""
                    className="eth_img"
                />

                <img
                    src="https://themegenix.net/nerko/wp-content/uploads/2022/12/x.png"
                    alt=""
                    className="cancel_img"
                />

                <button className="gradient-filled-btn mx-auto mt-3 d-block ">
                    Join Community
                </button>
            </div>

            <img
                src={divider}
                alt=""
                height="80px"
                width="80px"
                className="d-block mx-auto divider"
            />
        </div>
    );
};

export default JoinCommunitySection;

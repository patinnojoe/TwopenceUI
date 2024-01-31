import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PoweredBy = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Set isActive to true after the component has mounted
        setIsActive(true);
    }, []);
    return (
        <div className={`powered_by_container ${isActive ? "active" : ""}`}>
            <h6 className="powered_by_header">POWERED BY AMAZING INVESTORS:</h6>
            <div className="sponsor_container">
                {/* for metamask */}
                <Link to="#">
                    <img
                        src="https://themegenix.net/nerko/wp-content/uploads/2022/12/wallet-light-01.svg"
                        alt=""
                        className="powered-by-img metamask"
                    />
                </Link>

                {/* for bitgo */}

                <Link>
                    <img
                        src="https://themegenix.net/nerko/wp-content/uploads/2022/12/wallet-light-02.svg"
                        alt=""
                        className="powered-by-img bit-go"
                    />
                </Link>

                {/* for coinbase */}

                <Link>
                    <img
                        src="https://themegenix.net/nerko/wp-content/uploads/2022/12/wallet-03.svg"
                        alt=""
                        className="powered-by-img coinbase"
                    />
                </Link>

                {/* for trust walet */}
                <Link>
                    <img
                        src="https://themegenix.net/nerko/wp-content/uploads/2022/12/wallet-light-04.svg"
                        alt=""
                        className="powered-by-img trustwallet"
                    />
                </Link>

                {/* for exodus */}
                <Link>
                    <img
                        src="https://themegenix.net/nerko/wp-content/uploads/2022/12/wallet-light-05.svg"
                        alt=""
                        className="powered-by-img excodus"
                    />
                </Link>
            </div>
        </div>
    );
};
export default PoweredBy;

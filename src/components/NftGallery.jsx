import { useState, useEffect } from "react";
import { NftCard } from ".";
import { Triangle } from "react-loader-spinner";

const NftGallery = () => {
    const [nftsData, setNftData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const options = {
                    method: "GET",
                    headers: {
                        accept: "application/json",
                        Authorization: "7fc0051c-c13e-4fc3-8276-bdb39afd6952",
                    },
                };

                const response = await fetch(
                    "https://api.nftport.xyz/v0/nfts/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d?chain=ethereum&page_number=1&page_size=6&include=metadata&refresh_metadata=false",
                    options
                );

                const data = await response.json();
                const nftData = await data.nfts;
                setLoading(false);

                setNftData(nftData);
                console.log(nftData);
            } catch (error) {
                console.error("Error fetching NFT data:", error);
                throw error;
            }
        };
        fetchData();
    }, []);

    //format date
    const formatDateString = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString();
    };

    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            {loading ? (
                <div className="d-block m-auto mt-4">
                    <Triangle
                        height="80"
                        width="80"
                        color="#fff"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />
                </div>
            ) : (
                <section>
                    <h2 className="text-center">Trending Cards</h2>

                    <div className="nft-gallery-conatainer">
                        {nftsData.map((nft, index) => (
                            <NftCard
                                key={index}
                                imageURL={nft.cached_file_url}
                                nftAuthor={nft.creator_address}
                                networkType={nft.chain}
                                nftPubDate={formatDateString(nft.updated_date)}
                                nftName={nft.metadata.attributes[index].value}
                            />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default NftGallery;

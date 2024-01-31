const nftcards = [
    {
        publishedBy: "Mat Turner",
        imageURL:
            "https://nft-monkey.com/wp-content/webp-express/webp-images/uploads/2023/03/2-1-1024x1024.png.webp",
        nftName: "Tigger Nutt",
        publishedDate: "6th, November, 2023",
        totalSales: "12, 777",
        totalVolume: "33,000",
        networkType: "Ethereum Mainchain",
    },

    {
        publishedBy: "Emmanuel Marrroc",
        imageURL:
            "https://static.ffx.io/images/$zoom_0.473%2C$multiply_1.6402%2C$ratio_1%2C$width_378%2C$x_0%2C$y_0/t_crop_custom/q_86%2Cf_auto/d22d363b42bd80403a8a0847e21360116d15edfa",
        nftName: "special bird",
        publishedDate: "6th, November, 2023",
        totalSales: "4, 8977",
        totalVolume: "55,000",
        networkType: "Georlic Mainchain",
    },

    {
        publishedBy: "Pat Manu",
        imageURL:
            "https://nft-monkey.com/wp-content/webp-express/webp-images/uploads/2023/03/679-1024x1024.png.webp",
        nftName: "fleshy",
        publishedDate: "6th, November, 2023",
        totalSales: "124, 8977",
        totalVolume: "125,070",
        networkType: "Solana Mainchain",
    },
];

export { nftcards };

export const fetchRealNFTData = async () => {
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
        // console.log(data.nfts);
        return data.nfts;
    } catch (error) {
        console.error("Error fetching NFT data:", error);
        throw error;
    }
};

const networkConfig = {
    // rinkeby chainId = 4
    4: {
        name: "rinkeby",
        ethUsdPriceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419" // ETH data feed from chainlink
    },
    // polygon
    137 : {
        name: "polygon",
        ethUsdPriceFeed: "0xF9680D99D6C9589e2a93a78A04A279e509205945"
    },
    // hardhat local network
}

module.exports = {
    networkConfig,
}
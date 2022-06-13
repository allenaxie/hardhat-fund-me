// imports 
const {networkConfig} = require("../helper-hardhat-config");
const {network}  = require("hardhat");

// hre = hardhat runtime environment
// getNamedAccounts, deployments are functions from hre
// hardhat-deploy automatically calls and deploys our function
module.exports = async ({ getNamedAccounts, deployments }) => {
    // functions from deployments
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = network.config.chainId;

    // if chainId is A use address 1
    // if chainId is B use address 2
    const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];

    // if price feed contract doesn't exist, we deploy a minimal version for our local testing
    // used for hardhat/local network

    // what happens when we want to change chains?
    // when going for localhost or hardhat network we want to use a mock
    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [/* */], // put price feed address
        log: true,
    })
}
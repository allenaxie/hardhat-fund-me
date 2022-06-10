// imports 

// hre = hardhat runtime environment
// getNamedAccounts, deployments are functions from hre
// hardhat-deploy automatically calls and deploys our function
module.exports = async ({ getNamedAccounts, deployments }) => {
    // functions from deployments
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = network.config.chainId;

}
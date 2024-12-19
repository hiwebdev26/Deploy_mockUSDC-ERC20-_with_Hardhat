require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/66046dfdd663432e80009370b21daedc",
      accounts:['8866ca7e2ab034bd950efe8db5cc7a3c3e505635cd1d86be67a6c05473c19f0e']
    }
  },
  solidity: {
    version: "0.8.26",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

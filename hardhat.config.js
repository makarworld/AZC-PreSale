require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/2a581da2c2944ee98257ed705963ca61",
      accounts: ["fe19ee0224fef46cfdc1e9956d651ca9d9dc80d41763cf7ed3bab84c2f306e51"]
    },
    polygon: {
      url: 'https://polygon-rpc.com',
      accounts:["fe19ee0224fef46cfdc1e9956d651ca9d9dc80d41763cf7ed3bab84c2f306e51"],
    }
  },
  solidity: {
    version: "0.8.15",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  },
  etherscan: {
    apiKey: "2H8SR7CXBS31MY1W3QDYKBJHUJBNA584F1",
  },
}

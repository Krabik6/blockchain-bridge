import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY!}`,
      accounts: [process.env.PRIVATE_KEY!],
    },
    matic: {
      url: process.env.PROVIDER,
      accounts: [process.env.PRIVATE_KEY!],
    },
  },
  // etherscan: {
  //   apiKey: process.env.POLYGON_API_KEY,
  // },
}; 

export default config;

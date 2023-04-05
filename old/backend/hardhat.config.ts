import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import dotenv from 'dotenv';
import { HardhatUserConfig } from "hardhat/config";

dotenv.config();

const {
  API_URL_KEY, 
  PRIVATE_KEY, 
  ETHERSCAN_APIKEY, 
} = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.0",
  etherscan: {
    apiKey: ETHERSCAN_APIKEY
  },
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${API_URL_KEY}`,
      accounts: [PRIVATE_KEY!],
    },
  }
};

export default config;

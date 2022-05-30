import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import { HardhatUserConfig } from "hardhat/config";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
// module.exports = {
//   solidity: "0.8.9",
// };
const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 3137,
    },
    localhost: {
      chainId: 31337,
    },
  },
  solidity: "0.8.9",
  namedAccounts: {
    deployer: {           // the [0] account is named default
      default: 0,
    },
  },
};

export default config;

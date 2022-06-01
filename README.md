# requirments

make sure you have each of the following installed by running:

```
git --version
node --version
yarn --version
```

# Before installing dependencies
note that installing dependancies using the --dev flag makes it available for the contracts to see during compilation.
Without it you wont be able to use the open openzepplin dir 

# Setup project

install hardhat as dev dep
```
yarn add --dev hardhat
```
#
initial it with:
```
yarn hardhat
```
-and select start an empty config. this project will start from scratch
youll be civen a config file

#
-next creat contracts folder in root dir. this is where hardhat will be configured to look
for contract (notice the diff in deploy methods from truffle, it comes down to byte code compilatoin and 
how they are diff in each tool) 
#
-The contract require openzepplin so add it then compile (make sure config setting are ok) with;
```
yarn add --dev @openzeppelin/contracts
yarn hardhat compile
```

compiling generates the artifacts

# Voting mechanism
an erc20 token is used to vote in the dao

# Contracts
there is alot going on in the governance contract but of course we use the tested and proven 
openzepplin library. as I continue to make doas the various interactionsbetween then should become
more clear but suffice it to say that the 

## compiling contracts
if there are errors in compilation check the hardhat config to make sure
that the solidity versions are correct
```
yarn hardhat compile
```

# Deploy Contracts
add ethers and the deploy script:
Since hardhat-deploy-ethers is a fork of @nomiclabs/hardhat-ethers and that other plugin might have
an hardcoded dependency on @nomiclabs/hardhat-ethers the best way to install hardhat-deploy-ethers
and ensure compatibility is the following:
```
yarn add --dev  @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers
```

also add hardhat deploy
```
yarn add --dev hardhat-deploy
```

 ## creae a deploy folder
 custom deploy script is necessary because of the way the smart contract ownership architecture
 for this tutorial the deploy scripts are written in typescript the hardhat.config.js now becomes .tss

 ### hardhat config notes
 had an issue gas limit so i had to configure the hardhat settings
 ```
 networks: {
    hardhat: {
      allowUnlimitedContractSize: true
    }
  },
  ```


# Using TYpescript
typescript dependencies
```
yarn add --dev
typescript
typechain 
ts-node
@typechain/ethers-v5
@typechain/hardhat
@types/chai 
@types/node
```

you will need to import these in various files including the hardhat config in order to
use these methods

# 01-deploy-governor-token

this file imports hardhat deploy which is used to pass the test enviornment 
```
import { hardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunctions } from "hardhat/deploy"
```

### connecting to local host vs hardhat network
```
yarn hardhat node 
```
connects to local host

# Delegating votes

delegating votes is handled by the open zepplin implementation of the erc20 contract which provides a method for handleing
address that have voting abilities. checkpoints which are like snap shots of the chain at a given moment are a crucial part of this 
process

# Proposal prosses

the propose function comes from the open zepplin library governance contract Governer.sol
it takes 4 parameters: targets, values, aclldata, description

### Proposal state
In the governor contract ther proposals are in a one of several states at any time
these states describe the status of all proposals whithin a contract
quarm rech and vote succeeded means that the vote suceded

# Voting 
### voting with signatures
this method will allow voters to make all votes and the doa to pay for the results to go on chain 
there are many different voting methods and this wil be the key to making doas the new standard for llc's

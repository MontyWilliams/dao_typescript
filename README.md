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

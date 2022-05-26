# requirments

make sure you have each of the following installed by running:

```
git --version
node --version
yarn --version
```

# Setup project

install hardhat as dev dep
```
yarn add --dev hardhat
```
#---------------------------------------------
initial it with:
```
yarn hardhat
```
and select start an empty config. this project will start from scratch
youll be civen a config file
#--------------------------------------------
next creat contracts folder in root dir. this is where hardhat will be configured to look
for contract (notice the diff in deploy methods from truffle, it comes down to byte code compilatoin and 
how they are diff in each tool) 
#--------------------------------------------
The contract requires openzepplin so add it then compile (make sure config setting are ok) with;
```
yarn add --dev @openzeppelin/contracts
yarn hardhat compile
```

# blockchain-developer-bootcamp-final-project

Project Name: Resume NFT Requester

Summary: This project will allow a user to download my resume as an NFT if I approve it.

# Public Eth address for NFT: 
* 0x370552cb51c1e84d922B11d2C0A5423CBf17b2c6
# Contract deployed on Robsten at this address:
* 0xe7995F40E063646A4F1a727EbCc838E2DDca8028

# Deployed to netlify:
https://61a5cfb5bc2d0a00089cd94d--sharp-lichterman-6d7d74.netlify.app/

First request of resume complete:
https://ropsten.etherscan.io/tx/0xd06a3e96fe881940956f1acc23c8a451acd4cc6d182ced66231ff57594eb0b8c


##Run Tests
Ensure the file '*truffle-config.js*' has the following settings to set the port to **7545**:

```
  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
 ...
```

Also, because I have locked the Pragma at 0.8.10 to ensure that contracts do not accidentally get deployed using, for example, the latest compiler which may have higher risks of undiscovered bugs.

Ensure the file '*truffle-config.js*' has the following settings to set the Solidity compiler to **0.8.10**:

```
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.10",    // Fetch exact version from solc-bin 
    }
  },
```

Spin up an instance of Ganache and select "**New Workspace (Ethereum)**."

Click "Add Project" and select the *truffle-config.js* file from the ***contract*** folder. Then select "**Save Workspace**" to start the local host.

To run all tests, simply run: `truffle test` from contract folder



Resume request process.
Nice loading process and when the transaction is complete the requester is notified with transaction successfull.

Document solidity functions


Notes:
yarn create react-app client
npm install @openzeppelin/contracts
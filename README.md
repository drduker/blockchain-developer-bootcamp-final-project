# blockchain-developer-bootcamp-final-project

## Project Name: 
Resume NFT Requester

**Summary**:  
This project will allow a user to download my resume as an NFT if I approve it.

## Process:  
A user goes to the distributed app and immediately metamask is prompted for login to connect an account.  If the user would like to request my resume using their public address, they press "Request My Resume" and they are prompted by MetaMask to approve the transaction and pay the small fees to submit the request.  During the request process you can see a nice loading process and once the transaction is complete the requester is notified with "Transaction Successful" prompt in the browser.  
A future iteration of the app will take advantage of the contract's minting of the NFT to the requester after the owner approves the request (or pays me a fee to make it more automatic).  The owner will have an area to approve all transactions in a separate page.

# Public Eth address for NFT: 
* 0x370552cb51c1e84d922B11d2C0A5423CBf17b2c6
# Contract deployed on Ropsten at this address:
* 0xe7995F40E063646A4F1a727EbCc838E2DDca8028

# Deployed to netlify:
https://61a5cfb5bc2d0a00089cd94d--sharp-lichterman-6d7d74.netlify.app/

## First request of resume complete:
https://ropsten.etherscan.io/tx/0xd06a3e96fe881940956f1acc23c8a451acd4cc6d182ced66231ff57594eb0b8c


## Running Locally and Tests
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


## Install command (for running locally)
```cd contract && yarn install && yarn start```  

## Requirements
* yarn

## Screencast link:
https://youtu.be/ksqN6tU7VNo

# Test My Application:
1. Go to https://61a5cfb5bc2d0a00089cd94d--sharp-lichterman-6d7d74.netlify.app/
2. Login with prompt to MetaMask
3. Press Request Resume Button
4. Approve transaction with MetaMask
5. Wait for loading process and confirmation of successful transaction


### Future:
1. Go to owner page and approve request for resume to trigger NFT issued 

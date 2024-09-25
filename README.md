# Interacting with an ERC-20 Token

## Overview
This is a decentralized application (DApp) that allows users to interact with an ERC-20 token smart contract. Users can connect their MetaMask wallets, view their token balances, and send tokens to other addresses.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Instructions](#instructions)
    - [Clone the Repository](#clone-the-repository)
    - [Install Dependencies](#install-dependencies)
    - [Start Ganache](#start-ganache)
    - [Deploy Your Smart Contract](#deploy-your-smart-contract)
    - [Update the DApp Configuration](#update-the-dapp-configuration)
    - [Configure MetaMask](#configure-metamask)
    - [Run the DApp](#run-the-dapp)
    - [Connect to the Wallet](#connect-to-the-wallet)
## Features
- Connect to MetaMask wallet
- View ERC-20 token balance
- Send tokens to other addresses
## Technologies Used
- **Ethereum**: Smart contracts using Solidity
- **Hardhat**: Development environment
- **OpenZeppelin**: ERC-20 token standard
- **JavaScript**: Frontend logic
- **HTML/CSS**: User interface
Getting Started
### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js**
- **Ganache**: For local Ethereum blockchain

### Instructions

#### Clone the Repository
```bash
git clone https://github.com/PChunduri1/Blockchain_Ass5.git
cd Blockchain_Ass5
## Install Dependencies
Navigate to your project directory and install the required npm packages:

```bash
npm install
## Start Ganache
Open Ganache and create a new workspace. Note the HTTP RPC server URL, typically http://127.0.0.1:7545. This will be used to connect your DApp to the local blockchain.

Deploy Your Smart Contract
Run the following command to deploy your ERC-20 token smart contract:

bash

npx hardhat run scripts/deploy.js --network localhost
Ensure that the deployment is successful and take note of the contract address printed in the console.

Update the DApp Configuration
In your app.js file, update the following variables with your deployed contract address and ABI:

javascript
Copy code
const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE"; // Replace with your contract address
const abi = YOUR_ABI_HERE; // Replace with your contract ABI
Configure MetaMask
Open MetaMask and create or import a wallet if you haven’t done so already.
Click on the network dropdown and select "Custom RPC."
Enter the Ganache HTTP RPC URL (usually http://127.0.0.1:7545) and set the Chain ID to 1337 (or the Chain ID shown in Ganache).
Add an account using one of the private keys from Ganache to fund your wallet with test Ether.
Run the DApp
Open the index.html file in your web browser. Alternatively, you can use a local server tool like http-server to serve the DApp:

bash
Copy code
npx http-server
Then open your browser and navigate to http://localhost:8000 (or the appropriate port).

Connect to the Wallet
Click on the "Connect Wallet" button in your DApp.
Approve the connection request in MetaMask.
The connected address and token balance should display below the button.

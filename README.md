# Interacting with an ERC-20 Token
A brief description of what this project does and its purpose.

Getting Started
Follow these instructions to set up and run the project on your local machine.

Prerequisites
Make sure you have the following software, libraries, or tools installed:

Node.js
MetaMask
Web3.js library
# Installation
Clone the repository:
git clone https://github.com/your-username/project-repo.git
cd project-repo
# Install dependencies:

bash
Copy code
npm install
# Update Contract Details:

Open the app.js file and update the contract ABI and address:

const contractAddress = 'Your_Contract_Address';
const abi = [Your_Contract_ABI];
Running the DApp
# Start the DApp:
Open the index.html file in your browser or use a local development server.

Connect MetaMask:
Ensure that MetaMask is connected to the same network as the deployed contract (e.g., Ropsten, Ganache, or Hardhat local network).

# Interact with the DApp:

View your token balance
Transfer tokens to another address
If using a local blockchain network like Ganache or Hardhat, ensure the network is running in the background.
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
Built With
HTML/CSS - For the user interface
JavaScript (Web3.js) - For interacting with the Ethereum blockchain
MetaMask - For wallet integration and transaction handling


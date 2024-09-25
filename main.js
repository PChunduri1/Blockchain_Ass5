let web3;
let contract;
let accounts;

const contractAddress = "0xa807a437bf17D05CA31E985D2D3f1bF2AD846c4E"; // Replace with your deployed contract address
const contractABI = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_initialSupply",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "success",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]; // Paste the ABI from the artifacts

// Check if MetaMask is installed and connect to it
window.addEventListener('load', async () => {
    if (typeof window.ethereum !== 'undefined') {
        web3 = new Web3(window.ethereum);

        document.getElementById('connectWallet').addEventListener('click', async () => {
            accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            document.getElementById('walletAddress').textContent = `Wallet Address: ${accounts[0]}`;
            loadContract();
        });

        document.getElementById('transferForm').addEventListener('submit', async (event) => {
            event.preventDefault();
            await transferTokens();
        });
    } else {
        alert('MetaMask is not installed');
    }
});

async function loadContract() {
    try {
        // Create a contract instance
        contract = new web3.eth.Contract(contractABI, contractAddress);
        console.log("Loaded contract:", contract);
        console.log("Accounts:", accounts);
        
        // Fetch and display the user's token balance
        await getBalance();
    } catch (error) {
        console.error("Error loading contract:", error);
        document.getElementById('tokenBalance').textContent = 'Error loading balance.';
    }
}

async function getBalance() {
    try {
        const balance = await contract.methods.balanceOf(accounts[0]).call();
        document.getElementById('tokenBalance').textContent = `Token Balance: ${web3.utils.fromWei(balance, 'ether')} MAT`;
    } catch (error) {
        console.error("Error fetching balance:", error);
        document.getElementById('tokenBalance').textContent = 'Error fetching balance.';
    }
}

async function transferTokens() {
    const recipient = document.getElementById('recipient').value;
    const amount = document.getElementById('amount').value;
    const feedback = document.getElementById('feedback');

    if (web3.utils.isAddress(recipient)) {
        try {
            const amountInWei = web3.utils.toWei(amount, 'ether');
            await contract.methods.transfer(recipient, amountInWei).send({ from: accounts[0] });
            feedback.textContent = 'Transfer successful!';
            await getBalance();
        } catch (error) {
            feedback.textContent = 'Transfer failed: ' + error.message;
        }
    } else {
        feedback.textContent = 'Invalid recipient address';
    }
}


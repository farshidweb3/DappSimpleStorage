# simple Smart Contract Interaction with MetaMask and Web3

Watch the video
https://www.youtube.com/watch?v=6JwktfAvNZg

[![Watch the video](assets/metamask.webp)]([assets/dapp.mp4](https://www.youtube.com/watch?v=6JwktfAvNZg))

This repository demonstrates the interaction between a smart contract deployed on a blockchain network and a frontend application using MetaMask and Web3.js. The smart contract is written in Solidity, and the frontend application allows users to connect their MetaMask wallet, read data from the contract, and write data to the contract.

## Technologies Used
- Solidity: The smart contract language used to write the contract.
- MetaMask: A cryptocurrency wallet and gateway to blockchain apps.
- Web3.js: A JavaScript library used to interact with the Ethereum blockchain.
- HTML/CSS/JavaScript: The frontend web technologies used to build the user interface.

## Deployment

1. Clone the repository: `git clone https://github.com/farshidweb3/DappSimpleStorage`
2. Install dependencies: `npm install`
3. Start the local development server: `npm start`
4. Open the application in your web browser: `http://localhost:3000`

Note: Make sure you have MetaMask installed in your browser and are connected to a compatible blockchain network (e.g., local development network or test network).

## Description

The repository consists of the following files:

- `index.html`: The HTML file containing the user interface elements and scripts for interacting with MetaMask and the smart contract.
- `script.js`: The JavaScript file that handles MetaMask connection, contract interaction, and UI updates.
- `styles.css`: The CSS file for styling the user interface elements.
- `build/contracts/FirstContract.json`: The JSON file containing the compiled bytecode and ABI (Application Binary Interface) of the smart contract.
- `server.js`: The Node.js server file responsible for handling AJAX requests and interacting with the smart contract using Web3.js.

The smart contract, `FirstContract.sol`, is a simple contract that allows users to set and get a value. It has a `setValue` function to update the value and a `getValue` function to retrieve the current value. The contract also has a `getMsgSender` function to retrieve the address of the message sender.

The frontend application uses MetaMask to connect the user's wallet. When the user clicks the "Connect with MetaMask" button, the application requests access to the user's accounts. If the connection is successful, the user's address is displayed, and the application fetches the current value from the smart contract and displays it.

The user can enter a new value in the input field and click the "Set Value" button to update the value in the smart contract. The application sends an AJAX request to the server (`nodejs/server.js`), which interacts with the smart contract using Web3.js. Once the transaction is confirmed, the updated value is displayed on the page.

## Conclusion

This repository serves as a basic example of how to interact with a smart contract using MetaMask and Web3.js. You can use this code as a starting point to build more complex decentralized applications (DApps) that interact with smart contracts on the Ethereum blockchain. Feel free to explore and modify the code according to your needs.

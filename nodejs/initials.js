// //Load HTTP module
// const http = require("http");
// const hostname = "127.0.0.1";
// const port = 3000;

// //Create HTTP server and listen on port 3000 for requests
// const server = http.createServer((req, res) => {
//   //Set the response HTTP header with HTTP status and Content type
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World\n");
// });

//listen for request on port 3000, and as a callback function have the port listened on logged
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



// solc compiler
solc = require("solc");

// file reader
fs = require("fs");

// Creation of Web3 class
Web3 = require("web3");

// Setting up a HttpProvider
web3 = new Web3(new Web3.providers.HttpProvider("https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78"));
web3.eth.net.getId()
.then((chainId) => {
  // Set the chain ID
  web3.eth.net.chainId = 80001;

  // Use the chain ID for further operations
  console.log('Chain ID:', chainId);
})
.catch((error) => {
  console.error('Error:', error);
});

// Reading the file
file = fs.readFileSync("../build/contracts/FirstContract.json");
// console.log(file);

var output = JSON.parse(file);

ABI = output.abi;
ByteCode = output.bytecode;
// console.log("Bytecode: ", ByteCode);
// console.log("ABI: ", ABI);

contract = new web3.eth.Contract(ABI);

const privateKey = '7a5e22ce891aa4c4f68f0e98efba08c5182c7198e4ebc10cd313fb8e28374df8';

const account = web3.eth.accounts.privateKeyToAccount(privateKey);

// console.log(`Account: ${account.address}`);
// for (let i = 0; i < 3; i++) {
//   const newAccount = web3.eth.accounts.create();
//   console.log(`Address ${i + 1}: ${newAccount.address}`);
// }


//  0x19EA940fb0B32bfBA08Ce1B6384DEA315e86f082




web3.eth.getAccounts().then((accounts) => {
  // Display all Ganache Accounts
  console.log("Accounts:", accounts);

  mainAccount = "0x19EA940fb0B32bfBA08Ce1B6384DEA315e86f082";

  // address that will deploy smart contract
  console.log("Default Account:", mainAccount);
  contract
      .deploy({ data: ByteCode })
      .send({ from: mainAccount, gas: 470000 })
      .on("receipt", (receipt) => {

          // Contract Address will be returned here
          console.log("Contract Address:", receipt.contractAddress);
      })
      .then((initialContract) => {
          initialContract.methods.message().call((err, data) => {
              console.log("Initial Data:", data);
          });
      });
});
// const deployContract = async () => {
//   const account = web3.eth.accounts.privateKeyToAccount(privateKey);

//   const contract = new web3.eth.Contract(ABI);

//   try {
   
//     const deployTransaction = contract.deploy({
//       data: ByteCode,
//     });
   
//     const gas = await deployTransaction.estimateGas();
 
 
//     const options = {
//       from: account.address,
//       gas: gas,
//     };

//     const receipt = await deployTransaction.send(options);

//     console.log('Contract Address:', receipt.contractAddress);

//     const deployedContract = new web3.eth.Contract(
//       contractABI,
//       receipt.contractAddress
//     );


    
//     // const initialValue = await deployedContract.methods.getValue().call();
//     // console.log('Initial Data:', initialValue);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// deployContract();



// const contract = new web3.eth.Contract(contractABI);

// contract.deploy({
//     data: contractBytecode
// }).send({
//     from: account.address,
//     gas: 'YOUR_GAS_LIMIT'
// }).on('receipt', (receipt) => {
//     console.log('Contract Address:', receipt.contractAddress);
// }).then((deployedContract) => {
//     deployedContract.methods.getValue().call((err, data) => {
//         console.log('Initial Data:', data);
//     });
// });


// contract
// .deploy({ data: bytecode })
// .send({ from: mainAccount })
// .on("receipt", (receipt) => {

//     // Contract Address will be returned here
//     console.log("Contract Address:", receipt.contractAddress);
// })
// .then((initialContract) => {
//     initialContract.methods.getValue().call((err, data) => {
//         console.log("Initial Data:", data);
//     });
// });

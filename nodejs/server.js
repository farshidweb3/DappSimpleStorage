const Provider = require('@truffle/hdwallet-provider');
var fs = require('fs');
var Web3 = require('web3');

file = fs.readFileSync("../build/contracts/FirstContract.json");
// console.log(file);

const headers = {
    'Access-Control-Allow-Origin': '*', /* @dev First, read about security */
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
    'Content-Type': 'application/json'
    /** add other headers as per requirement */
};


// //Load HTTP module
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
var url = require('url');

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
    //Set the response HTTP header with HTTP status and Content type
    res.statusCode = 200;
    //   res.setHeader("Content-Type", "text/plain");

    var q = url.parse(req.url, true).query;
    //   console.log(q.val);
    var result = sendData(q.val);

    result.then(function (response) {
        // res.setHeader('Content-Type', 'application/json');
        res.writeHead(200, headers);
        res.end(JSON.stringify(response, null, 3));
    });


});

// listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


var output = JSON.parse(file);

ABI = output.abi;


var SmartContractAddress = "0xC99593557C050247E8CF67c76f893f4b621Fe61F";
var SmartContractABI = ABI;
var address = "0x33ed79E781cF2e3EbE008E35B501f61C7E738023"
var privatekey = "0x2a11e224da94638692e7bb8f11e9b9a7fb0de793a1fde5c97dbe753dab1d1977";
var rpcurl = "http://127.0.0.1:7545";

const sendData = async (val) => {

    console.log("in function");
    var provider = new Provider([privatekey], rpcurl);
    var web3 = new Web3(provider);
    var myContract = new web3.eth.Contract(SmartContractABI, SmartContractAddress);
    var oldvalue = await myContract.methods.getValue().call();
    console.log("old value:", oldvalue);

    var receipt = await myContract.methods.setValue(val).send({ from: address });
    //   console.log(receipt);



    var newvalue = await myContract.methods.getValue().call();


    if (receipt.status) {
        console.log('you saved a new value ' + val);
    }

    var json = {
        blockHash: receipt.blockHash,
        blockNumber: receipt.blockNumber,
        cumulativeGasUsed: receipt.cumulativeGasUsed,
        effectiveGasPrice: receipt.effectiveGasPrice,
        gasUsed: receipt.gasUsed,
        transactionHash: receipt.transactionHash,
        status: receipt.status,
        your_new_value: newvalue
    };

    return json;


}


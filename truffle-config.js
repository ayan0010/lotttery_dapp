const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic= "liberty used raw common clown window maximum climb lumber disease tomato rebuild";


// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

 module.exports = {

  contracts_build_directory: "./client/src/contracts",
  networks: {
    goerli: {
    provider: () => 
    new HDWalletProvider(
      mnemonic,
      `https://eth-goerli.g.alchemy.com/v2/oLC4CZG-WefNemIG3Tm3WSm_Riz-U663`
      ),

    network_id: 5,       // Ropsten's id
    gas: 5500000,        // Ropsten has a lower block limit than mainnet
    confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },
  // development:{
  //   host:"127.0.0.1",
  //   port:7545,
  //   network_id:"*",
  // },

  compilers: {
    solc: {
      version: "0.8.11", // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
};

//ganache - 
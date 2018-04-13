var HDWalletProvider = require("truffle-hdwallet-provider");
// whisper
var mnemonic = "cruise aware clear naive dignity paper coding virtual hello network";
module.exports = {
    networks: {
        development: {
          host: 'localhost',
          port: 8545,
          network_id: '*' // Match any network id
        },
        ropsten: {
         // https://ropsten.infura.io/e0ymtft1rrwAaFHssxxx your infura key
          provider: new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/e0ymtft1rrwAaFHssxxx'),
          gas: 2100000,
          network_id: 3
        }
    }
};

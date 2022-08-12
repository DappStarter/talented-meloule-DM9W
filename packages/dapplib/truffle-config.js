require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remember protect hockey knife force skate'; 
let testAccounts = [
"0x3b1b8fedbaa162c698d9bb7e8284519eeb3be3ececf8d45a9f126d4ef215702f",
"0x20f23299bc7a230858f80b83278dc905508640d7e8ada0fd45b9ba74747da222",
"0x4552b3edb31fd4216a7acddace46494f879ab484cc1b276972faa467d4be38dd",
"0x9688f48c3e5c3d2c5cef65f18a0aabf5c9e72252d12920a9f7c02b3f61bfeb49",
"0x15e86ff573a499ecabd29543c784c1dad92f1b5dd5fb4b4f436cda7fd52cd960",
"0x85c0736ae96eb569cb8d730208ee834aeaca98d046d22b9432f9f1a5d03e6b0b",
"0xb6a185d2fb5dde92b8081aa882734296e03e3a2e36993b1724a2ff5181524307",
"0x4a44453edc3b161f2c67522521fdd89fd24194687af5ce0aef394fa796eb8b39",
"0xa377fedd6c7d44bc55bf110e24aa9ffaa9f3f07635dd9a14b71dc8cf2501336f",
"0x81f4f1f009be0c323007e443b01073ab92d2e8a55f165e3c02dddd825634dfe9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


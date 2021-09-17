require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth ridge comfort install enter bone simple'; 
let testAccounts = [
"0x26e892c540dc55d9bb29541c3ab1bf23ae2f03f94bf64389a8408970b291a846",
"0x38ccb8d681d0bb0d9b34968f70dafb0f9998c594b3131e2d82b96a0af2e2b20f",
"0xaeb41d44ae882889f0c2677de9103fbf4ab42cdc53c0143119bfa6ef1fe38e13",
"0xa68e92db805e87f519a83737bd77643a936b5fcd250ca1e5298679ba27e0c620",
"0xbb084899a7f0a02d92bb1e69d1088cb422542c69a97b3fc1ef21522119a09f20",
"0x361e74b776f7f643a875c41579a3a2e03aa1da191573adfcfc16c502b4d1fc19",
"0x0d70ff9b8bace1f276d1586f3d90ed03cc8fb4cfef11eaa106b8d7f768da0ef0",
"0xac7332cabd36b39a7a0722ad02133f2f4b4716ed92d92b42784f8690d4459b4b",
"0xfd21c75e2bb7cde0b5fa6956cb98ab2c10a6628d1e0bcb130f46efa37f135066",
"0xb62be6144c0ebc25166e3489cae61affa14949329a5676a1a1e064a52f9321e9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



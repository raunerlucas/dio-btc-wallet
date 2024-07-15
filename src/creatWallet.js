const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

// Define a Rede [Teste]
const network = bitcoin.networks.testnet;

// Rede [Principal]
// const network = bitcoin.networks.bitcoin;

// Derivação de carteiras HD
const path = `m/49'/1'/0'/0`;

// Geração do Mnemonico, conjunto de palavras aleatorias
let mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);

// criando a raiz da carteira HD
let root = bip32.fromSeed(seed);

// criando uma conta - par pvt/pub keys
let account = root.derivePath(path);
let node = account.derive(0).derive(0);


let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    networks: network,
}).address;

console.log("Carteira gerada ");
console.log("Endereço: ", btcAddress);
console.log("Private Key: ", node.toWIF());
console.log("Seed: ", mnemonic);




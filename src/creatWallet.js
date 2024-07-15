const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

// Define a rede Bitcoin a ser utilizada. 'testnet' para a rede de teste, 'bitcoin' para a rede principal.
const network = bitcoin.networks.testnet;

// Define o caminho de derivação para carteiras HD (Hierarchical Deterministic) seguindo o padrão BIP44.
// m / purpose' / coin_type' / account' / change / address_index
// Consulte: https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki
const path = `m/49'/1'/0'/0`;

// Gera uma frase mnemônica aleatória de 12 palavras. 
// Essa frase pode ser utilizada para recuperar o acesso à sua carteira posteriormente.
let mnemonic = bip39.generateMnemonic();

// Converte a frase mnemônica em uma semente (seed) binária, 
// que será utilizada para gerar a raiz da sua carteira HD.
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Cria a raiz da carteira HD a partir da semente gerada anteriormente.
let root = bip32.fromSeed(seed);

// Deriva a partir da raiz da carteira HD utilizando o caminho definido anteriormente.
let account = root.derivePath(path);
// Deriva novamente para gerar um par de chaves pública/privada para a primeira conta e o
// primeiro endereço da carteira.
let node = account.derive(0).derive(0);

// Gera o endereço Bitcoin a partir da chave pública derivada.
let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    networks: network,
}).address;

// Imprime as informações da carteira gerada no console.
console.log("Carteira Bitcoin gerada com sucesso!");
console.log("Endereço:", btcAddress);
console.log("Chave Privada (WIF):", node.toWIF());
console.log("Frase Mnemônica:", mnemonic);

// **ATENÇÃO!**
//   * Guarde sua frase mnemônica e chave privada em um local seguro.
//   * A perda dessas informações impedirá o acesso aos seus fundos.
//   * Nunca compartilhe suas chaves privadas com ninguém.
//   * Este código é apenas para demonstração e fins educacionais.
//   * Não utilize-o para armazenar grandes quantias de Bitcoin.
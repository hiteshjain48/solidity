const HDWalletProvider = require("@truffle/hdwallet-provider")
const Web3 = require('web3')
const { interface, bytecode } = requrie('./compile')

const provider = new HDWalletProvider(
    'mnemonic',
    'link'
)

const web3 = Web3(provider)

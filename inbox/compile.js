// compile code will go 
const path = require('path')
const fs = require('fs')
const solc = require('solc')

inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol")
const source = fs.readFileSync(inboxPath, 'utf-8')

console.log(solc.compile(source, 1))

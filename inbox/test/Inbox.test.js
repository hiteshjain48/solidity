// contract test code will go here
const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())
const { interface, bytecode } = require('../compile')
class Car {
    park(){
        return 'stopped'
    }
    drive() {
        return 'vroom'
    }
}

// let car

// beforeEach(()=>{
//     car = new Car()
// })

// describe('Car', ()=>{
//     it('can park', ()=>{
//         assert.equal(car.park(), 'stopped')
//     })

//     it('can drive', ()=>{
//         assert.equal(car.drive(), 'vroom')
//     })
// })

let accounts
let inbox 
beforeEach(async () => {
    //-----------------------------------
    // get list of all accounts
    // web3.eth.getAccounts().then(fetchedAccounts => {
    //     console.log(fetchedAccounts)
    // })
    accounts = await web3.eth.getAccounts()
    // Use one of the accounts to deploy the contract
    inbox = await web3.eth.Contract(JSON.parse(interface)).deploy({data: bytecode, arguments: ['Hitesh here!!']}).send({from: accounts[0], gas:'1000000'})

})

describe('Inbox', () => {
    it('deploy a contract', () => {})
})
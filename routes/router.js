
const express=require('express')
const { register, login, getBalance, moneyTransfer, accountStatement, accountDelete } = require('../controllers/logic')
const { jwtMiddleware } = require('../middleware/jwtMiddleware')


// router object

 const router=new express.Router()

// create account -  signup

 router.post('/bankuser/create_account',register)

// login

 router.post('/bankuser/login',login)

// check balance

 router.get('/bankuser/balance/:acno',jwtMiddleware,getBalance)

// money transfer

 router.post('/bankuser/money-transfer',jwtMiddleware,moneyTransfer)

// account statement 

 router.get('/bankuser/account-statement/:acno',jwtMiddleware,accountStatement)

// profile view


// delete account

 router.delete('/bankuser/delete-account/:acno',jwtMiddleware,accountDelete)

// export

 module.exports=router
'use strict'

const express = require('../server')
const app = express()
const { serverPort } = require('../config/server')
const registerRouter = require('./register')
const userRouter = require('./user')

app.use('/register', registerRouter)
app.use('/user', userRouter)

app.listen(serverPort, () => {
    console.log(`User service is up and running on localhost ${serverPort}`)
})
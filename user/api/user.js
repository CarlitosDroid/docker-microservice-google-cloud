'use strict'

const UserService = require('../dal/userService')
const express = require('../server')
const router = express.Router()

router.use(function timelog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})


router.get('/', function(req, res) {
    UserService.get().then((user) => {
        console.log('CARLO123444')
        res.send(user)
    }).catch((error) => {
        res.send({
            error: error
        })
    })
})

module.exports = router
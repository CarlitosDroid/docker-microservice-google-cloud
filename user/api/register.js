'use strict'

const UserService = require('../dal/userService')

const express = require('../server')
const router = express.Router()

router.use(function timelog(req, res, next) {
    console.log('Timeeee: ', Date.now())
    next()
})

//define the home page route
router.get('/', function(req, res) {
    UserService.insert().then((insertId) => {
        res.send({ carlitos: insertId })
    }).catch((error) => {
        res.send({
            errosito: error
        })
    })
})

module.exports = router
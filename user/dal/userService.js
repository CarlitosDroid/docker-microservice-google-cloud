'use strict'

const dbConnection = require('../db')

const UserService = {
    insert() {
        return new Promise((resolve, reject) => {
            dbConnection.query('INSERT INTO USER SET ?', { firstName: 'carlitos', lastName: 'vargas', email: 'carlitos@gmail.com' }, function(error, results, fields) {
                if (error) reject(new Error(`An error ocurred getting the user ${error}`))
                resolve(results.insertId)
            })
        })
    },
    get() {
        return new Promise((resolve, reject) => {
            dbConnection.query('SELECT * FROM USER', (error, results) => {
                if (error) reject(new Error(`An error ocurred getting the user ${error}`))
                resolve(results)
            })
        })
    }
}

module.exports = UserService
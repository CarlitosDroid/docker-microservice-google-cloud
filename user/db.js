'use strict'

const mysql = require('mysql')
const config = require('./config/db')
const { dbConfig } = config('default')

const dbConnection = mysql.createConnection(dbConfig)

module.exports = dbConnection
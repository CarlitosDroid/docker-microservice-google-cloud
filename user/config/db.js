'use strict'
const config = {
    production: {
        dbConfig: {
            host: process.env.DATABASE_HOST || '127.0.0.1',
            database: 'sampledb',
            user: 'carlitosdroid',
            password: '123',
            port: 3306
        }
    },
    default: {
        dbConfig: {
            host: process.env.DATABASE_HOST || '127.0.0.1',
            database: 'sampledb',
            user: 'carlitosdroid',
            password: '123',
            port: 3306
        }
    }
}

module.exports = function(env) {
    return config[env] || config.default
}
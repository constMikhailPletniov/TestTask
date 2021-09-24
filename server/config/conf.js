require('dotenv').config();

module.exports = {
    CREATE: 201,
    DB: process.env.DB || 'mongodb://localhost:27017/test',
    PORT: process.env.PORN || 5000,
    OK: 200
}
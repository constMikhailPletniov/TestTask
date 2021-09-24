const { Schema, model } = require('mongoose');

const DataSchema = new Schema({
    gender: {
        type: String,
    },
    name: {
        type: String,
    },
    surname: {
        type: String,
    },
    phone: {
        type: Number
    },
    message: {
        type: String
    },
    time: {
        type: Number
    },
    data: {
        type: Number
    }
});

module.exports = model('Data', DataSchema);
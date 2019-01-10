const mongoose = require('mongoose')
const mongooseSchema = require('mongoose').Schema

const userSchema = new mongooseSchema({
    idOfUser: {
        type: Number,
        unique: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    city: {
        type: String
    },
    address: {
        type: String
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User
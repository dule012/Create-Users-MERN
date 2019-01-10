const mongooseSchema = require('mongoose').Schema

const userSchema = new mongooseSchema({
    idUser: {
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
        type: Number
    },
    city: {
        type: String
    },
    address: {
        type: String
    }
})

const User = mongoose.model('User', userSchema)
export default User
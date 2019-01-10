const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const mongodb = require('mongodb').MongoClient;
const cors = require('cors')
const User = require('./models/userModel.js')


mongoose.connect('mongodb://localhost:27017', (err) => {
    if (err) {
        return console.log('ERROR MONGOOSE')
    }
    console.log('MONGOOSE CONNECTED')
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())





let idOfUser = 0
app.post('/newuser', (req, res) => {
    const { firstName, lastName, phoneNumber, city, address } = req.body
    const newUser = new User({
        idOfUser,
        firstName,
        lastName,
        phoneNumber,
        city,
        address
    })
    newUser.save((err, user) => {
        if (err) {
            return err
        }
        res.json({ idOfUser, firstName, lastName, phoneNumber, city, address })
    })
    idOfUser++
})

app.listen(4000, () => {
    console.log('server listening')
})
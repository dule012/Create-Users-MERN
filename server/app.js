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



app.get('/', (req, res) => {
    User.find({}, (err, users) => {
        // if (err) {
        //     res.sendStatus(500)
        //     return err
        // }
        res.json(users)
    })
})

app.delete('/', (req, res) => {
    console.log(req.body)
    const { idOfUser } = req.body
    //Obrisi
    // res.json({ idOfUser, text: 'deleted user' })
    User.findOneAndDelete({ idOfUser: idOfUser }, (err, doc) => {
        if (err) {
            res.send('Server error').status(500)
            return err
        }
        res.json({ idOfUser })
    })
})

let idOfUser = 1
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
    //Obrisi
    // res.json({ idOfUser, firstName, lastName, phoneNumber, city, address })
    newUser.save((err, user) => {
        // if (err) {
        //     res.sendStatus(500)
        //     return err
        // }
        res.json({ idOfUser, firstName, lastName, phoneNumber, city, address })
    })
    idOfUser++
})

app.get('/edit/:id', (req, res) => {
    const id = req.params.id
    User.findOne({ idOfUser: id }, (err, user) => {
        // if (err) {
        //     res.sendStatus(500)
        //     return err
        // }
        res.json(user)
    })
})
app.put('/edit/:id',(req,res)=>{
    const id = req.params.id
    
})
app.listen(5000, () => {
    console.log('server listening')
})
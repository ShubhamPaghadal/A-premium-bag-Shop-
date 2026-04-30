const express = require('express')
const router = express.Router()
const ownerModel = require('../models/owner-model.js')
console.log('ownerMode**********〽️〽️〽️〽️〽️〽️l:', ownerModel)

router.get('/', (req, res) => {
    res.send('Hello Owner')
})
router.get('/product', (req, res) => {
    res.send('Hello There, Here is the product page ')
})

console.log('NODE_ENV:', process.env.NODE_ENV)
try {

    if (process.env.NODE_ENV === 'development') {

        router.post('/create', async (req, res) => {
            let owners = await ownerModel.find()
            // console.log('Owners....〽️', owners)
            if (owners.length > 0) {
                return res.status(503).send("You don't have permission to create a new admin")
            }

            let { fullname, email, password } = req.body
            // console.log('Fullname***', fullname)
            console.log('email*******', email)

            let createdOwner = await ownerModel.create({
                fullname,
                email,
                password
            });

            res.status(201).send(createdOwner)
        })
    }
} catch (error) {
    res.send(error.message)
}

module.exports = router 
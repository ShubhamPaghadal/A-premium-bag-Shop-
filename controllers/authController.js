const userModel = require('../models/user-model.js')
const bcrypt = require('bcrypt')
const { genarateToken } = require('../utils/genarateToken')
const express = require('express')
const app = express()

app.get('/shop', (req, res) => {
    res.send('Welcome to bag collation')
})

const registerUser = async (req, res) => {
    try {
        let { email, password, fullname } = req.body
        console.log('FullName', req.body)

        let checkUser = await userModel.findOne({ email })
        if (checkUser) return res.json({ message: "You already have an account pls log in" })

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) return res.send(err.message)

                let user = await userModel.create({
                    email,
                    password: hash,
                    fullname
                })

                const token = genarateToken(user)
                // console.log('user._id***',user._id)
                console.log('token....***', token)
                res.cookie('token', token)
                res.json({ message: 'user created successfulyy', user })
            })
        })

        console.log('user Data ****** ', user)

    } catch (error) {
        console.log(error.message)
    }
}

const loginUser = async (req, res) => {
    let { email, password } = req.body

    let user = await userModel.findOne({ email: email })
    console.log('userss****', user)

    if (!user) return res.json({ message: 'Invalid email or password' })

    bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
            let token = genarateToken(user)
            res.cookie('token', token)
            console.log('this is login token : - =====', token)
            return res.redirect('/shop')
        } else {
            return res.json({ message: 'Invalid email or password' })
        }
    })
}

module.exports = { registerUser, loginUser }
const express = require('express')
const app = express()
const router = express.Router()
const isLoggedin = require('../middlewares/isLoggedIn')
const flash = require('connect-flash')

app.set('view engine', 'ejs')

router.get('/', (req, res) => {
    // let error = req.flash('error')
    // res.render('index', { error })
    res.send('welcome to home page ')
})

router.get('/shop', isLoggedin, (req, res) => {
    res.render('shop')
})

module.exports = router
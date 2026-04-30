const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

const cookieparser = require('cookie-parser');
const path = require("path")

// Routes
const ownerRouter = require('./routes/ownerRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');
const index = require('./routes/index');


// Needed package 
const expressSession = require('express-session')
const flash = require('connect-flash')


const db = require('./config/mongoose-connection')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieparser())
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs")
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET
}))
app.use(flash())

app.get('/', (req, res) => {
    res.render('homePage')
})
app.use('/owners', ownerRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter)
app.use('/index', index)


app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
// app.get('/', (req, res) => {
//     res.send('Hello!!!')
// })

app.listen('3000', (req, err) => {
    console.log("Server Is SuccessFully Running on Port 🥳💃 : 3000")
})
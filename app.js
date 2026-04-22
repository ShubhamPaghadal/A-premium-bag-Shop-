const express = require('express')
const app = express()

const cookieparser = require('cookie-parser');
const path = require("path")
const ownerRouter = require('./routes/ownerRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');


const  db = require('./config/mongoose-connection')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieparser())
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs")

app.use('/owners', ownerRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter)


// app.get('/', (req, res) => {
//     res.send('Hello!!!')
// })

app.listen('3000', (req, err) =>{
    console.log("Server Is SuccessFully Running on Port 🥳💃 : 3000")
})
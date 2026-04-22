const mongoose = require('mongoose')

mongoose
.connect ("mongodb://localhost/primium-bag-shop")
.then(function ()  {
    console.log('database connected')
})
.catch(function (err) {
    console.log(err)
})

module.exports = mongoose.connection
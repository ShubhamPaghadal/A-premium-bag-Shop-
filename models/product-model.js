const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    image: {
        type: String, // store file path or URL
        
    },

    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },

    price: {
        type: Number,
        // required: true
    },

    discount: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    },

    bgcolor: {
        type: String,
        default: "#ffffff"
    },

    panelcolor: {
        type: String,
        default: "#ffffff"
    },

    textcolor: {
        type: String,
        default: "#000000"
    }
})

module.exports = mongoose.model("product", productSchema)
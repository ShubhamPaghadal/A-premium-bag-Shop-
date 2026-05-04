const express = require('express')
const app = express()
const router = express.Router()
const upload = require('../config/multer-config')
const productModel = require('../models/product-model')


router.post('/create', upload.single('image'), async (req, res) => {

    const imageUrl = `http://localhost:3000/uploads/${req.file.filename}`

    try {
        let { name, price, discount, bgcolor, panalcolor, textcolor } = req.body
        console.log(req.body)
        let product = await productModel.create({
            image: imageUrl,
            name,
            price,
            discount,
            bgcolor,
            panalcolor,
            textcolor,
        })

        console.log('products*****', product)
        res.send(product)
    } catch (err) {
        console.log(err.message)
    }
})


//<======================== Admin rout ========================>
router.get("/admin", (req, res) => {
    res.render('createProduct')
})
module.exports = router                                                                                    
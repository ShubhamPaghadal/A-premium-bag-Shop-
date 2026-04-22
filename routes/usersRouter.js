const express= require('express')
const router = express.Router()

router.get('/',  (req, res) => {
    res.send('heyy user')
})
module.exports = router
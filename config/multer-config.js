// const multer = require('multer')


// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage })

// module.exports = upload

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')   // save in uploads folder
    },
    filename: function (req, file, cb) {
        const uniqueName = Date.now() + '-' + file.originalname
        cb(null, uniqueName)
    }
})

const upload = multer({ storage: storage })

module.exports = upload
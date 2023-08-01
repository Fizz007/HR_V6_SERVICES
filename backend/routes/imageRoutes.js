const express = require('express')

const {createImage,getImage} = require('../controller/imageController')

const router = express.Router()

router.get('/', getImage)
router.post('/', createImage)


module.exports = router;
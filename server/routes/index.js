const Router = require('express')
const router = new Router()
const getCard = require('./getCard')
const getDecksList = require('./getDecksList')
const getDeckData = require('./getDeckData')

router.use('/getCard', getCard)
router.use('/getDecksList', getDecksList)
router.use('/getDeckData', getDeckData)

module.exports = router

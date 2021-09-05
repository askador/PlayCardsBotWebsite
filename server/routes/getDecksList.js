const Router = require('express')
const router = new Router()
const path = require('path')

/**
 * Получить список обьектов колод
 */
router.get('/', (req, res) => {
  var options = {
    root: path.join(__dirname, '..', 'decks')
  }

  var fileName = 'decks.json'
  res.sendFile(fileName, options, function (err) {
    if (err) {
      res.send(err)
    }
  })
})

module.exports = router

const Router = require('express')
const router = new Router()
const path = require('path')
const decks = require('../decks/decks.json')

/**
 * Получить данные про колоду
 */
router.get('/:id', (req, res) => {
  const { id: link } = req.params

  decks.map(deck => {
    if (deck.link === link) {
      return res.sendFile(
        path.join(__dirname, '../decks', deck.title, 'data.json')
      )
    }
    return res.send({})
  })
})

module.exports = router

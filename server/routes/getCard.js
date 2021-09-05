const Router = require('express')
const router = new Router()
const path = require('path')
const decks = require('../decks/decks.json')

const deckTitle = deckLink => {
  const title = decks.map(deckObject => {
    if (deckObject.link === deckLink) {
      return deckObject.title
    }
  })

  return title[0]
}

/**
 * Получить .png карту с запроса по названию колоды и номеру карты
 */
router.get('/', (req, res) => {
  const query = req.query
  const keys = Object.keys(query)

  if (!(keys.length === 2 && keys.includes('deck') && keys.includes('card')))
    return res.send({ message: 'Bad request' })

  const [deck, card] = [query.deck, query.card]

  if (
    deck.includes('/') ||
    deck.includes('\\') ||
    card.includes('/') ||
    card.includes('\\')
  )
    return res.send({ message: 'Bad request' })

  let options = {
    root: path.join(__dirname, '..', 'decks')
  }

  try {
    let fileName = path.join(deckTitle(deck), `${card}.png`)

    res.sendFile(fileName, options, function (err) {
      if (err) {
        res.send({ message: 'Invalid query' })
      }
    })
  } catch (e) {
    res.send({ message: 'Invalid filename' })
  }
})

module.exports = router

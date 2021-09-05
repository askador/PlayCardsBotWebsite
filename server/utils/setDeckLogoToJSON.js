const deckLogoToBase64 = require('./deckLogoToBase64')
const fs = require('fs')
const path = require('path')

const pathToDecksJSON = path.join(__dirname, '..', 'decks', 'decks.json')

const decks = require(pathToDecksJSON)

/**
 * Поместить лого в колоду в общем списке
 * server/decks/decks.json
 */
const setDeckLogoToJSON = deckName => {
  const logoBase64 = deckLogoToBase64(deckName)
  try {
    decks.map(deck => {
      if (deck.title === deckName) {
        deck.img = logoBase64
      }
    })

    fs.writeFile(pathToDecksJSON, JSON.stringify(decks), function writeJSON (
      err
    ) {
      if (err) return console.log(err)
    })
  } catch (e) {
    console.log('ERROR at setDeckLogoToJSON', e)
  }
}

module.exports = setDeckLogoToJSON

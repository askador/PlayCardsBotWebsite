const fs = require('fs')
const path = require('path')
const deckLogoFileName = 'deckLogo.png'

/**
 * Переобразовать лого колоды в base64 для помещения в общий список колод
 *
 * @param deckName
 * @returns imgBase64
 */
const deckLogoToBase64 = deckName => {
  let filePath = path.join(__dirname, '../decks', deckName, deckLogoFileName)
  let bitmap = fs.readFileSync(filePath)
  let imgBase64 = `data:image/png;base64,${new Buffer.from(bitmap).toString(
    'base64'
  )}`
  return imgBase64
}

module.exports = deckLogoToBase64

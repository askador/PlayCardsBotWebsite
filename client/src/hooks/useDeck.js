import { useState, useEffect } from 'react'
import { getCard } from '../utils'

const cardsValues = {
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
  11: 'Валет',
  12: 'Дама',
  13: 'Король',
  14: 'Туз'
}

/* TODO: Переделать на формат {value}_{suit} 
  {
    heart: 'h',
    clubs: 'c',
    diamonds: 'd',
    spades: 's'
  }  

*/
const cardsIndexes = {
  hearts: [1, 13],
  clubs: [27, 39],
  diamonds: [53, 65],
  spades: [79, 91]
}

const cardsTemplate = [
  {
    name: 'hearts',
    symbol: '♥',
    list: []
  },
  {
    name: 'clubs',
    symbol: '♣',
    list: []
  },
  {
    name: 'diamonds',
    symbol: '♦',
    list: []
  },
  {
    name: 'spades',
    symbol: '♠',
    list: []
  }
]

/**
 * Загрузить колоду с сервера
 *
 * @returns {Object[]} cards
 */
const useDeck = deckLink => {
  const [cards, setCards] = useState(cardsTemplate)

  useEffect(() => {
    for (const [suitName, imgIndexes] of Object.entries(cardsIndexes)) {
      for (let i = imgIndexes[0]; i <= imgIndexes[1]; i++) {
        let id = i - imgIndexes[0] + 2
        let title = cardsValues[id]

        getCard(deckLink, i).then(img => {
          setCards(prevCards => {
            return prevCards.map(suit => {
              if (suit.name === suitName) {
                return {
                  ...suit,
                  list: [...suit.list, { title: title, img: img, id: id }]
                }
              }
              return { ...suit }
            })
          })
        })
      }
    }
  }, [])

  return cards
}

export default useDeck

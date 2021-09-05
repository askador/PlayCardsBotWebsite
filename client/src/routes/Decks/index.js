import './Decks.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getDecksList } from '../../utils'
import deck from '../../img/cards.png'

const decksList = [
  { id: 0, img: deck, title: 'Deck', link: 'deck' },
  { id: 1, img: deck, title: 'Deck', link: 'deck' },
  { id: 2, img: deck, title: 'Deck', link: 'deck' },
  { id: 3, img: deck, title: 'Deck', link: 'deck' },
  { id: 4, img: deck, title: 'Deck', link: 'deck' },
  { id: 5, img: deck, title: 'Deck', link: 'deck' },
  { id: 6, img: deck, title: 'Deck', link: 'deck' },
  { id: 7, img: deck, title: 'Deck', link: 'deck' },
  { id: 8, img: deck, title: 'Deck', link: 'deck' }
]

const Decks = () => {
  const [decks, setDecks] = useState([])

  useEffect(() => {
    getDecksList().then(res => setDecks(res.data))
    // setDecks(decksList)
  }, [])

  return (
    <div className='decks'>
      {decks.map(({ img, title, link }, index) => {
        return (
          <div className='item' key={index}>
            <Link className='img' to={`/shop/decks/${link}`}>
              <img src={img} alt=''></img>
            </Link>
            <Link className='title' to={`/shop/decks/${link}`}>
              {title}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Decks

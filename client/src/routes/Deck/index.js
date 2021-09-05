import './Deck.scss'

import { useParams } from 'react-router-dom'
import { useDeck } from '../../hooks'
import { Suit } from '../../components'
import { getDeckData } from '../../utils'
import { useEffect, useState } from 'react'

const deckDataExmpl = {
  title: 'Deck',
  author: ' ',
  info: 'some COOOL info'
}

const Deck = () => {
  const [deckData, setDeckData] = useState({})
  const { id: deckLink } = useParams()
  const cards = useDeck(deckLink)

  useEffect(() => {
    getDeckData(deckLink).then(res => setDeckData(res.data))
    // setDeckData(deckDataExmpl)
  }, [deckLink])

  return (
    <div className='deck'>
      <div className='data'>
        <div className='title'>{deckData.title}</div>
        <div className='data2_0'>
          {deckData.author && (
            <div className='author'>
              <b>Author:</b> {deckData.author}
            </div>
          )}

          {deckData.info && (
            <div className='info'>
              <b>Info:</b> {deckData.info}
            </div>
          )}
        </div>
      </div>
      <div className='items'>
        {cards.map(({ name, symbol, list }, index) => {
          return <Suit name={name} symbol={symbol} list={list} key={index} />
        })}
      </div>
    </div>
  )
}

export default Deck

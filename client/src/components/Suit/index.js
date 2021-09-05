import expandIco from '../../img/expand_ico.png'
import { useState } from 'react'
import Collapse from '@kunukn/react-collapse'
import './Suit.scss'

/**
 * Сортировка массива обьектов карт
 *
 * @param {Object[]} cards
 */
const sortedCards = cards => {
  return cards.sort((a, b) => (a.id > b.id ? 1 : -1))
}

const Suit = ({ name, symbol, list }) => {
  const [suitOpen, setSuitOpen] = useState(false)

  const handleExpandIcoClick = e => {
    setSuitOpen(prev => !prev)
    if (!suitOpen) {
      e.target.lastChild.className += ' open'
    } else {
      e.target.lastChild.className = e.target.lastChild.className.replace(
        ' open',
        ''
      )
    }
  }

  return (
    <div className='suit'>
      <div className='bar' onClick={handleExpandIcoClick}>
        <div className='name'>
          {name} {symbol}
        </div>
        <img className='expand_ico' src={expandIco} alt=''></img>
      </div>
      <Collapse isOpen={suitOpen} transition={'300ms'} className='cards'>
        {sortedCards(list).map(({ title, img }) => {
          return (
            <div className='card' key={title}>
              <img src={img} alt=''></img>
              <div className='title'>{title}</div>
            </div>
          )
        })}
      </Collapse>
    </div>
  )
}

export default Suit

import './Shop.scss'
import { Link } from 'react-router-dom'
import suits from '../../img/suits.png'
import arrow_up from '../../img/arrow_up.png'

const sections = [
  {
    img: suits,
    title: 'Колоды',
    path: 'decks',
    info: 'Различные стили карточных колод'
  },
  {
    img: arrow_up,
    title: 'Усиления',
    path: 'boosts',
    info: 'Преимущества в игре'
  }
]

const Shop = () => {
  return (
    <div className='shop'>
      {sections.map(({ img, title, path, info }, index) => {
        return (
          <div className='section' key={index}>
            <div className='info'>
              <Link className='title' to={`shop/${path}`}>
                {title}
              </Link>
              <br />
              <span className='details'>{info}</span>
              <br />
              <Link className='link_btn btn_deck_ref' to={`shop/${path}`}>
                Перейти
              </Link>
            </div>
            <img src={img} alt=''></img>
          </div>
        )
      })}
    </div>
  )
}

export default Shop

import { NavLink } from 'react-router-dom'
import './Navbar.scss'

const routes = [
  {
    path: '',
    title: 'Главная'
  },
  {
    path: 'rules',
    title: 'Правила'
  },
  {
    path: 'shop',
    title: 'Магазин'
  },
  {
    path: 'more',
    title: 'Другое'
  }
]

/**
 * Навигационная панель
 */
const Navbar = () => {
  return (
    <nav>
      <ul>
        {routes.map(({ path, title }, index) => {
          return (
            <li key={index}>
              <NavLink to={`/${path}`} activeClassName='active' exact={true}>
                {title}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar

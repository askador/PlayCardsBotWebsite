import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import './Header.scss'
import logo from '../../img/logo-text.png'

const Header = () => {
  return (
    <header>
      <Link to='/' className='logo'>
        <img src={logo} alt=''></img>
      </Link>
      <Navbar />
    </header>
  )
}

export default Header

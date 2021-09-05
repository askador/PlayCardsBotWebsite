import './Home.scss'
import logo from '../../img/logo.png'

const Home = () => {
  return (
    <div className='main'>
      <img src={logo} alt=''></img>
      <div className='title'>PlayCards</div>
      <div className='credentials'>
        <div className='bot_info'>Бот для игры в популярные карточные игры</div>
        <a className='link_btn bot_link' href='https://t.me/fedserfey'>
          Открыть в Telegram
        </a>
      </div>
    </div>
  )
}

export default Home

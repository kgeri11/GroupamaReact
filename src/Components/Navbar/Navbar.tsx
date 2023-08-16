import React from 'react'
import style from './navbar.module.scss'
import logo from '../../../public/assets/logo_colors.png'
import dots from '../../../public/assets/dots.svg'
import exit from '../../../public/assets/exit.svg'

const Navbar = (): JSX.Element => {
  return (
    <div className={style.navContainer}>
      <div className={style.logo}>
        <a href='index.html'>
          <img
            src={logo}
            alt='logo'
          />
        </a>
      </div>
      <div className={style.logout}>
        <div className={style.menu}>
          <img
            src={dots}
            alt='menu'
          />
        </div>
        <img
          src={exit}
          alt='exit'
        />
        <div className={style.text}>Kilépés</div>
      </div>
    </div>
  )
}

export default Navbar

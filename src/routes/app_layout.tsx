import '../styles/Layout.scss'
import Button from 'react-bootstrap/Button'

import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom'

import React, { useEffect } from 'react'

export default function Layout() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    console.log(location)

    if (location.pathname == '/') {
      navigate('/home')
    }
  }, [])

  return (
    <div className="page-container">
      <header className="header">
        <div className="header__logo">
          <img src="images/logo.svg"></img>
          <span>Game Store</span>
        </div>
        <div className="header__links">
          <Link to={`home`}>Популярное</Link>
          <Link to={`games`}>Магазин</Link>
        </div>
        <Button className="header__profile" href="./profile">
          <img className="header__profile__img" src="images/avatar.svg"></img>
        </Button>
      </header>
      <Outlet />
    </div>
  )
}

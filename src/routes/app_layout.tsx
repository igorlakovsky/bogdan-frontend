import '../styles/Layout.scss'

import { Link, Outlet } from 'react-router-dom'

import React from 'react'

export default function Layout() {
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
        <img className="header__profile" src="images/avatar.svg"></img>
      </header>
      <Outlet />
    </div>
  )
}

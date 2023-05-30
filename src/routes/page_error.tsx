import React from 'react'
import Button from 'react-bootstrap/Button'

import '../styles/Error.scss'

export default function Error() {
  return (
    <div className="error">
      <div className="error__logo">404</div>
      <div className="error__text">Упс кажется тут что-то не так</div>
      <Button size="lg" href="/home">
        Вернуться на главную
      </Button>
    </div>
  )
}

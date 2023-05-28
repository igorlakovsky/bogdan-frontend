import '../styles/Home.scss'

import Card from 'react-bootstrap/Card'
import React from 'react'

export default function Home() {
  return (
    <div className="home">
      <div className="home__logo">
        <img src="images/home-logo.png"></img>
      </div>
      <div className="home__trend">
        <div className="home__trend__title">Сейчас в тренде</div>
        <div className="home__trend__cards">
          <Card>
            <Card.Body>
              <div className="home__trend__cards__item">
                Call of Duty®: Black Ops Cold War
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <div className="home__trend__cards__item">
                Call of Duty®: Black Ops Cold War
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <div className="home__trend__cards__item">
                Call of Duty®: Black Ops Cold War
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

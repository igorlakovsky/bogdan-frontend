import '../styles/Games.scss'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import React from 'react'

export default function Games() {
  return (
    <div className="games">
      <div className="games__title">Новые релизы</div>
      <div className="games__cards">
        <Card>
          <Card.Img variant="top" src="images/trend-card-1.png" />
          <Card.Body>
            <Card.Title>Assassin’s Creed Valhalla</Card.Title>
            <Card.Text>Ubisoft</Card.Text>
            <Button variant="primary" className="games__card__button">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

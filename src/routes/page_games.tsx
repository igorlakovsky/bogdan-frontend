import '../styles/Games.scss'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import React, { useRef } from 'react'

interface Card {
  id: number
  img: string
  title: string
  text: string
}

export default function Games() {
  const gamesData = useRef<Card[]>([
    {
      id: 1,
      img: 'images/trend-card-1.png',
      title: 'Assassin’s Creed Valhalla',
      text: 'Ubisoft',
    },
    {
      id: 1,
      img: 'images/trend-card-1.png',
      title: 'Assassin’s Creed Valhalla',
      text: 'Ubisoft',
    },
    {
      id: 1,
      img: 'images/trend-card-1.png',
      title: 'Assassin’s Creed Valhalla',
      text: 'Ubisoft',
    },
    {
      id: 1,
      img: 'images/trend-card-1.png',
      title: 'Assassin’s Creed Valhalla',
      text: 'Ubisoft',
    },
    {
      id: 1,
      img: 'images/trend-card-1.png',
      title: 'Assassin’s Creed Valhalla',
      text: 'Ubisoft',
    },
    {
      id: 1,
      img: 'images/trend-card-1.png',
      title: 'Assassin’s Creed Valhalla',
      text: 'Ubisoft',
    },
  ])

  return (
    <div className="games">
      <div className="games__title">Новые релизы</div>
      <div className="games__cards">
        {gamesData.current.map((value) => {
          return (
            <Card key={value.id}>
              <Card.Img variant="top" src="images/game-logo.jpg" />
              <Card.Body>
                <Card.Title>{value.title}</Card.Title>
                <Card.Text>{value.text}</Card.Text>
                <Button variant="primary" className="games__card__button">
                  5000 руб
                </Button>
              </Card.Body>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

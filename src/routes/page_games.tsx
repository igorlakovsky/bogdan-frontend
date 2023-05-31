import '../styles/Games.scss'

import axios from 'axios'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import React, { useState, useEffect } from 'react'

interface Card {
  game_id: number
  img: string
  name: string
  text: string
}

export default function Games() {
  const [gamesData, setGamesData] = useState<Card[]>([])

  useEffect(() => {
    axios.get('http://localhost:3001/games').then(function (response) {
      setGamesData(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <div className="games">
      <div className="games__title">Новые релизы</div>
      <div className="games__cards">
        {gamesData.map((value) => {
          return (
            <Card key={value.game_id}>
              <Card.Img variant="top" src="images/game-logo.jpg" />
              <Card.Body>
                <Card.Title>{value.name}</Card.Title>
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

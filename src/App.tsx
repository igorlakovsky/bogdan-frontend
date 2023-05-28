import './styles/Nullstyle.scss'
import './styles/App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Error from './routes/page_error'
import Game from './routes/page_game'
import Games from './routes/page_games'
import Home from './routes/page_home'
import Layout from './routes/app_layout'
import React from 'react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: 'game/:gameId',
        element: <Game />,
      },
      {
        path: 'games',
        element: <Games />,
      },
      {
        path: 'home',
        element: <Home />,
      },
    ],
  },
])

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

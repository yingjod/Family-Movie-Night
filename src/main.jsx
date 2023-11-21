import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import React from 'react'

//! Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'

//! import components
import App from './App.jsx'
import Home from './components/Home.jsx'
import HotGames from './components/HotGames.jsx'
import GameSingle from './components/GameSingle.jsx'

//! import loaders
import { getHotGames, getSingleGame } from './utils/loaders/games.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/games",
        element: <HotGames />,
        loader: getHotGames,
      },
      {
        path: "/games/:gameId",
        element: <GameSingle />,
        loader: async ({ params }) => getSingleGame(params.gameId),
      },
    ],

  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

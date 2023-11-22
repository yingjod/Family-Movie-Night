import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import React from 'react'

//! Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'

//! import components
import App from './App.jsx'
import Home from './components/Home.jsx'
import TvIndex from './components/TvIndex.jsx'
import TvPick from './components/TvPick.jsx'

//! import loaders
import { getTvIndex, getTvPick } from './utils/loaders/shows.js'

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
        path: "/shows",
        element: <TvIndex />,
        loader: getTvIndex,
      },
      {
        path: "/shows/:id",
        element: <TvPick />,
        loader: async ({ params }) => getTvPick(params.id),
      },
    ],

  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

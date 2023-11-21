import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import React from 'react'

//! Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss'

//! import components
import App from './App.jsx'
import Home from './components/Home.jsx'

//! import loaders

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],

  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

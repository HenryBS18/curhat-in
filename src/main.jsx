import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import LoginReminder from './pages/login_reminder.jsx'
import Edukasi from './pages/edukasi.jsx'
import Home from './pages/home.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  }, 

  {
    path: "/loginReminder",
    element: <LoginReminder />,
  }, 

  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/edukasi",
    element: <Edukasi />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
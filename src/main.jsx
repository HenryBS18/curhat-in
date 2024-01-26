import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import LoginReminder from './pages/LoginReminder';
import Home from './pages/Home';
import Education from './pages/Education';
import Chatbot from './pages/Chatbot';
import Konsultasi from './pages/Konsultasi';
import Quiz from './pages/Quiz';
import QuizDetail from './pages/QuizDetail';
import QuizFinished from './pages/QuizFinished';
import EducationDetail from './components/EducationDetail';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/loginReminder',
    element: <LoginReminder />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/education',
    element: <Education />,
  },
  {
    path: '/chatbot',
    element: <Chatbot />,
  },
  {
    path: '/education/:id',
    element: <EducationDetail />,
  },
  {
    path: '/layanan-konsultasi',
    element: <Konsultasi />,
  },
  {
    path: "/quiz",
    element: <Quiz />
  },
  {
    path: "/quiz/:id",
    element: <QuizDetail />
  },
  {
    path: "/quiz/:id/score",
    element: <QuizFinished />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

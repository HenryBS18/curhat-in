import { createBrowserRouter } from "react-router-dom";

import Login from '../pages/Login';
import Register from '../pages/Register';
import LoginReminder from '../pages/LoginReminder';
import Home from '../pages/Home';
import Education from '../pages/Education';
import Chatbot from '../pages/Chatbot';
import Konsultasi from '../pages/Konsultasi';
import Quiz from '../pages/Quiz';
import QuizDetail from '../pages/QuizDetail';
import QuizFinished from '../pages/QuizFinished';
import EducationDetail from '../pages/EducationDetail';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login-reminder',
    element: <LoginReminder />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/materi-edukasi',
    element: <Education />,
  },
  {
    path: '/chatbot',
    element: <Chatbot />,
  },
  {
    path: '/materi-edukasi/:id',
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

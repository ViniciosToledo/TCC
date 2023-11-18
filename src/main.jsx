import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/home';
import Alimentos from './components/TelaAlimentos/alimentos';
import Sentimentos from './components/TelaSentimentos/talaSentimentos';
import Necessidades from './components/TelaNecessidades/necessidades';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path:"alimentos",
    element: <Alimentos></Alimentos>
  },
  {
    path:"sentimentos",
    element: <Sentimentos></Sentimentos>
  },
  {
    path:"necessidades",
    element: <Necessidades></Necessidades>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

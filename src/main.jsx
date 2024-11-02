import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import ErrorElement from './components/ErrorElement/ErrorElement.jsx';
import Root from './components/Root/Root.jsx';
import DashBoard from './components/DashBoard/DashBoard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'dashboard',
        element: <DashBoard></DashBoard>
      }
    ]

    
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

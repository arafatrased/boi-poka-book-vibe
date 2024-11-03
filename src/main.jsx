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
import BookDetails from './components/BookDetais/BookDetails.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';

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
        path: 'books/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../public/booksData.json')
      },
      {
        path: 'dashboard',
        element: <DashBoard></DashBoard>
      },
      {
        path: 'listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('../public/booksData.json')
      }
    ]

    
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Route from './components/Route/Route';
import ProductDetails from './components/ProductDetails/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: '/',
        element:<Route></Route>
      },
      {
        path: 'product/:product_id',
        element:<ProductDetails></ProductDetails>,
        loader:()=> fetch('/products.json')
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

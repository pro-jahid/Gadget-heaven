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
import Dashboard from './components/Dashboard/Dashboard';
import ReChart from './components/ReChart/ReChart';

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
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        loader:()=> fetch('/products.json')
      },
      {
        path:'/rechart',
        element:<ReChart></ReChart>
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Shop from './components/Shop/Shop';
import Home from './components/Layouts/Home';
import Orders from './components/Oders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cardProductsLoader from './loaders/cardProductsLoaders';
import Checkout from './components/checkOut/Checkout';
const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children:[
      {
        path: '/',
      element: <Shop></Shop>
      },
      {
        path:'orders',
        element:<Orders></Orders>,
        loader: cardProductsLoader
      },
      {
        path:'inventory',
        element: <Inventory></Inventory>

      },
      {
        path:'checkout',
        element:<Checkout></Checkout>
      },
      {
        path:'login',
        element: <Login></Login>

      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

 
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

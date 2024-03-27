import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from "./pages/ErrorPage";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import Navbar from "./components/Navbar/Navbar";
import IndividualProductPage from "./pages/IndividualProductPage"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './index.css'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"products/",
        element:<ProductsPage/>,
      },
      {
        path:"products/:productId",
        element:<IndividualProductPage />
      },
      {
        path:"cart/",
        element:<CartPage/>,
      }
    ],
    errorElement:<ErrorPage/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)

import React, { Children } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Navbar from './components/Navbar'

const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Navbar/>,
      children:[
        {
          path:"/",
          element:<Home /> 
        },
        {
          path:"/about",
          element:<About />
        },
        {
          path:"/cart",
          element:<Cart /> 
        },
        {
          path:"/collection",
          element:<Collection />
        },
        {
          path:"/contact",
          element:<Contact /> 
        },
        {
          path:"/login",
          element:<Login />
        },
        {
          path:"orders",
          element:<Orders /> 
        },
        {
          path:"PlaceOrder",
          element:<PlaceOrder /> 
        },
        {
          path:"Product",
          element:<Product /> 
        }
      ]
    }
  ]);

  return (
    <div className='px-7 sm:px-[5vw] md:px-[7vw] lg:px-[7vw]'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App

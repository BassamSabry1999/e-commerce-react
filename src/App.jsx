import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './component/layout/Layout'
import Home from './component/Home/Home'
import Login from './component/login/Login'
import Register from './component/register/Register'
import Brands from './component/brands/Brands'
import Cards from './component/cards/cards'

export default function App() {

 const router =  createBrowserRouter([

{path: '' , element:<Layout/> ,children:[

  {path: '' ,element :<Home/>},
  {path: 'home' ,element :<Home/>},
  {path: 'login' ,element :<Login/>},
  {path: 'register' ,element :<Register/>},
  {path: 'Cards' ,element :<Cards/>},
  {path: 'Brands' ,element :<Brands/>},
  {path: ' * ' ,element : <div className='bg-secondary vh-100'> 
  <h2>404</h2></div>}

]}



 ] )


  return <>
<RouterProvider router={router} />
  </>
}


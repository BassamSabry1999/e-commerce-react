import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return <>
  <Navbar/>

<Outlet/>

  <div className="bg-danger">

    <h2>footer</h2>
  </div>
  
  </>
}

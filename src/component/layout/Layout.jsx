import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return <>
  <Navbar/>

<Outlet/>

  <footer className="py-4">
<div className="container m-4">
<h2> Get the freshcart App</h2>
<p>FreshCart is an easy-to-install and customize block-based theme</p>
</div>
<div className="container d-flex justify-content-between">
<input type="text " className='form-control w-75' placeholder='email..' />
<button className='btn btn-success  ms-5 w-25'>Share App Link</button>
</div>
<div className='container border-top border-bottom border-2 border-dark py-4 d-flex align-items-center justify-content-between'>
  <div className="left-part">
    <ul className='list-unstyled d-flex'>
      <li className='me-2'>
        <h6>payment parteners</h6>
      </li>
      <li className='me-2 text-primary'>
      <i class="fa-brands fa-cc-paypal"></i>
      </li>
      <li className='me-2 text-primary'>
      <i class="fa-brands fa-cc-amazon-pay"></i>
      </li>
      <li className='me-2 text-primary'>
      <i class="fa-brands fa-cc-mastercard"></i>
      </li>
    </ul>
  </div>
  <div className="right-part d-flex align-items-center">
    <h6>Get Deliveries with FreshCart</h6>
    <button className='btn btn-dark btn-lg mx-3'>
    <i class="fa-brands fa-app-store me-2"></i>
       <span>Available on App store</span>
       </button>
    <button className='btn btn-dark btn-lg '> 
    <i class="fa-brands fa-google-play me-2"></i>
   <span> Get it from geogle play</span>
    </button>
  </div>
</div>
  </footer>
  
  </>
}

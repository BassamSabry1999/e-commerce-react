import React from 'react'

export default function Register() {
  return <>
  <div className="container py-5">
    <h2>Registeration form</h2>
<form >
<label className='mt-3' htmlFor="name">name</label>
<input type="text"className='form-control' id='name'placeholder='name' />

<label className='mt-3' htmlFor="email">email</label>
<input type="email"className='form-control' id='email'placeholder='email' />

<label className='mt-3' htmlFor="phone">phone</label>
<input type="number"className='form-control' id='phone'placeholder='phone' />

<label className='mt-3' htmlFor="passward">passward</label>
<input type="passward"className='form-control' id='passward'placeholder='passward' />

<label className='mt-3' htmlFor="repassward">repassward</label>
<input type="passward"className='form-control' id='repassward'placeholder='repassward' />

<button className='btn btn-outline btn-primary mt-3'>Register</button>

</form>

  </div>
  </>
}

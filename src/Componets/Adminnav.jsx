import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'

function Adminnav() {
  return (
    <div className='adminnav row d-flex'>
      <div className='bg-dark p-0'>
        <div><h4 className='text-light text-center p-3'>Dashboard</h4></div>
        <hr className='text-light ms-2' />
        <ul className='mt-5'>
          <li className='mb-5 '>
            <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 512 512">
              <path fill="#ffffff" d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z" />
            </svg>
            <Link to='/adminpage' className=' adminbutton  text-light' >Products <svg xmlns="http://www.w3.org/2000/svg" className='arrow' height="15px" viewBox="0 0 448 512">
              <path fill="#ffffff" d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
            </svg></Link>
          </li>
          <li className='mb-5 '>
            <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 576 512">
              <path fill="#ffffff" d="M64 32C46.3 32 32 46.3 32 64l0 240 0 48 0 80c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-128 0-151.8c0-18.2-19.4-29.7-35.4-21.1L352 215.4l0-63.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4 160 64c0-17.7-14.3-32-32-32L64 32z" />
            </svg>
            <Link to='seller' className='adminbutton text-light' >Seller <svg xmlns="http://www.w3.org/2000/svg" className='arrow' height="15px" viewBox="0 0 448 512">
              <path fill="#ffffff" d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
            </svg></Link>
          </li>
        </ul>
        <div className='container bg-danger  text-center'>
          <Logout />
        </div>
      </div>
    </div>
  )
}


export default Adminnav

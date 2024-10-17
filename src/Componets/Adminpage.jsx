import React from 'react'
import { Outlet } from 'react-router-dom'
import Adminnav from './Adminnav'

function Adminpage() {
  return (
    <div className='d-flex'>
      <Adminnav></Adminnav>
      <div className='container'>
        <Outlet />
      </div>
    </div>
  )
}

export default Adminpage

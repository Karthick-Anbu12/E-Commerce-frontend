import React, { useContext } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'


function Homepage() {
  return (
  <>
  <Navbar/>
  <Outlet/>
   </>
   
  )
}

export default Homepage

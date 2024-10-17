
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import context from './Context'
import Logout from './Logout'
function Navbar() {
    const { cart, user, setsearch, methodSearch, isLoggedIn } = useContext(context)
    return (
     <>
            <div className='container-fluid'>
                <div className='row'>
                    <nav className="navbar navbar-expand-lg navbar-light  justify-content-center bg-secondary">
                        <Link to='/' className='me-5 weblogo fs-4 ' >Shop Sphere
                        </Link>
                        <form className='d-flex col-lg-5' >
                            <Link to='searchpage' className='col-lg-11 Card'  onKeyDown={methodSearch}><input type="text" className='form-control' placeholder='Search . . . .' onChange={e => setsearch(e.target.value) }/></Link>
                        </form>
                        <Link to='/' className='hometext fs-6 me-2' >Homepage
                        </Link>
                        <Link to='shopping-cart' className='btn btn-outline-light m-2 cart'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                            </svg> Cart({cart.length})
                        </Link>
                        {
                           isLoggedIn && <div className="dropdown p-2 ">

                                <button className="dropbtn btn btn-outline-light cart ">
                                    <svg className='me-2 p-0' xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 448 512">
                                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                                    </svg>Hi, {user.username}</button>

                                <div className="dropdown-content p-3 rounded">
                                    <Logout />
                                </div>
                            </div>
                        }
                        {
                           !isLoggedIn&&<div><Link  to='/login'className='btn btn-outline-light m-2'>Login/Signup</Link></div>
                        }
                      
                    </nav>

                </div>
            </div>


        </>
    )
}

export default Navbar

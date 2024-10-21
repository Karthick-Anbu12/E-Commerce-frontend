
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
                            <Link to='searchpage' className='col-lg-11 Card' onKeyUp={methodSearch}>
                                <input type="text" className='form-control' placeholder='Search . . . .' onKeyUp={e => setsearch(e.target.value)} /></Link>
                        </form>
                        <Link to='/' className=' btn btn-outline-light m-2 cart' >
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 576 512">
                                <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                            </svg> Homepage
                        </Link>
                        <Link to='shopping-cart' className='btn btn-outline-light m-2 cart'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 576 512">
                                <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
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
                            !isLoggedIn && <div><Link to='/login' className='btn btn-outline-light m-2'>Login/Signup</Link></div>
                        }

                    </nav>

                </div>
            </div>


        </>
    )
}

export default Navbar

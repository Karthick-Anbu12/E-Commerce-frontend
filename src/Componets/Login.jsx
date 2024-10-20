import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import context from './Context'
import { useContext } from 'react'

function Login() {
    const { getuser, getdata,setLoggedin } = useContext(context)
  
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validate: (values) => {
            let error = {};
            if (values.email == "" || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                error.email = "Please enter valid Email "
            }
            if (values.password == "" || values.password.length <= 3) {
                error.password = "Please enter password"
            }
            return error
        },
        onSubmit: async (values) => {
            try {
                const response = await axios.post("https://e-commerce-back-end-avek.onrender.com/user-login", values)
                if (response.status == 200)
                     {
                    window.localStorage.setItem("mytoken", response.data.message)
                    navigate('/')
                setLoggedin(true)
                   getuser()
                }
            } catch (error) {
                
            }

        }
    })
    return (
        <div >
            <div className= 'bg-dark text-light'>
                <Link className='Card fs-1 ms-3 text-light p-4'to='/'>Homepage</Link>

            </div>
        <div className='d-flex justify-content-center cont p-5 '>
            <div className='row  mt-5 hovereff login'>
                <div className='col-lg-6 bg-primary p-5 rounded-start-3 '>
                    <h1 className='text-light phrase'>Welcome Back to<br />&emsp;&emsp; Shop Sphere!</h1>
                    <p className='text-light phrase1'>Your next favorite find is just a click away!</p>
                </div>
                <div className='col-lg-6 bg-light rounded-end-3   '>
                    <div className='container ms-4 mt-5 text-center'>
                        <svg className='me-5' xmlns="http://www.w3.org/2000/svg" height="70px" width="70px" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg>
                        <form className='text-center m-1 p-3 ' onSubmit={formik.handleSubmit}>
                            <div className="row mb-3">
                                <div className="col-sm-10 text-start">
                                    <input type="email" className={`form-control ${formik.errors.email && 'is-invalid'}`} id="inputEmail3" placeholder='Enter email' name='email' value={formik.values.email} onChange={formik.handleChange} /><span style={{ color: 'red' }}>{formik.errors.email}</span>

                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-10 text-start">
                                    <input type="password" id="inputPassword3" placeholder='Passwaord' name="password" value={formik.values.password} onChange={formik.handleChange} className={`form-control ${formik.errors.password && 'is-invalid'}`} /><span style={{ color: 'red' }}>{formik.errors.password}</span>
                                </div>
                            </div>
                            <button type="submit" className='btn btn-primary me-5' >Login</button>
                        </form>
                        <Link to='/signin' className='btn btn-link me-1'>Signin</Link><Link to='/adminlogin' className='btn btn-link me-5'>Admin</Link>
                    </div>
                    </div>
            
            </div>
        </div>
        </div>
    )
}

export default Login

import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Signin() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            address: {
                addressline1: "",
                addressline2: "",
                city: "",
                state: "",
                pincode: ""
            },
            cart: []
        },
        validate: (values) => {
            let error = {};
            if (values.username == "" ||values.username.length<=2) {
                error.username = "Please enter valid username "
            }
            if (values.email == "" || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                error.email = "Please enter valid Email "
            }
            if (values.password == "" || values.password.length <= 8 || !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i.test(values.password)) {
                error.password = "Password is not strong"
            }
            if (values.address.addressline1 == "" || values.address.addressline1.length <= 3) {
                error.addressline1 = "Please enter valid Address"
            }
            if (values.address.addressline2 == "" || values.address.addressline2.length <= 3) {
                error.addressline2 = "Please enter valid Address"
            }
            if (values.address.city == "" || values.address.city.length <= 3) {
                error.city = "Please enter valid City Name"
            }
            if (values.address.state == "" || values.address.state.length <= 3) {
                error.state = "Please enter valid State Name"
            }
            if (values.address.pincode == "" || values.address.pincode.length <= 5) {
                error.pincode = "Please enter valid Pincode"
            }
            return error
        },
        onSubmit: async (values) => {
            console.log(values)
            await axios.post("http://localhost:3000/user-create", values)
            navigate('/login')
        }

    })

    return (
        <div className='background  ' >
            <div className='d-flex justify-content-center'>
                <div className='row signinform p-4 mt-3 border border-info rounded-2 signin '>
                    <div className='mb-3'>
                        <h3>Sign in</h3>
                    </div>
                    <form className='container' onSubmit={formik.handleSubmit}>
                        <div className="form-group row mb-3">
                            <label for="name" className="col-sm-3 col-form-label">Name</label>
                            <div className="col-sm-8">
                                <input type="text" id="name" placeholder="Username" name='username' value={formik.values.username} onChange={formik.handleChange} className={`form-control ${formik.errors.username && 'is-invalid'}`} /><span style={{ color: 'red' }}>{formik.errors.username}</span>
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label for="inputEmail3" className="col-sm-3 col-form-label">Email</label>
                            <div className="col-sm-8">
                                <input type="email" id="inputEmail3" placeholder="Email" name='email' value={formik.values.email} onChange={formik.handleChange} className={`form-control ${formik.errors.email && 'is-invalid'}`} /><span style={{ color: 'red' }}>{formik.errors.email}</span>
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label for="inputPassword3" className="col-sm-3 col-form-label">Password</label>
                            <div className="col-sm-8">
                                <input type="password" id="inputPassword3" placeholder="Password" name='password' value={formik.values.password} onChange={formik.handleChange} className={`form-control ${formik.errors.password && 'is-invalid'}`} /><span style={{ color: 'red' }}>{formik.errors.password}</span>
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label for="address1" className="col-sm-3 col-form-label">Address 1</label>
                            <div className="col-sm-8">
                                <input type="text" id="address1" placeholder="Door number" name='address.addressline1' value={formik.values.address.addressline1} onChange={formik.handleChange} className={`form-control ${formik.errors.addressline1 && 'is-invalid'}`} /><span style={{ color: 'red' }}>{formik.errors.addressline1}</span>
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label for="address2" className="col-sm-3 col-form-label">Address 2
                            </label>
                            <div className="col-sm-8">
                                <input type="text" id="address2" placeholder="Apartment, studio, or floor" name='address.addressline2' value={formik.values.address.addressline2} onChange={formik.handleChange} className={`form-control ${formik.errors.addressline2 && 'is-invalid'}`} /><span style={{ color: 'red' }}>{formik.errors.addressline2}</span>
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label for="city" className="col-sm-3 col-form-label">City</label>
                            <div className="col-sm-8">
                                <input type="text" id="city" placeholder="City" name='address.city' value={formik.values.address.city} onChange={formik.handleChange} className={`form-control ${formik.errors.city && 'is-invalid'}`} /><span style={{ color: 'red' }}>{formik.errors.city}</span>
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label for="state" className="col-sm-3 col-form-label">State</label>
                            <div className="col-sm-8">
                                <input type="text" id="state" placeholder="state" name='address.state' value={formik.values.address.state} onChange={formik.handleChange} className={`form-control ${formik.errors.state && 'is-invalid'}`} /><span style={{ color: 'red' }}>{formik.errors.state}</span>
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label for="pincode" className="col-sm-3 col-form-label">Pincode</label>
                            <div className="col-sm-8">
                                <input type="text" id="pincode" placeholder="Pincode" name='address.pincode' value={formik.values.address.pincode} onChange={formik.handleChange} className={`form-control ${formik.errors.pincode && 'is-invalid'}`} /><span style={{ color: 'red' }}>{formik.errors.pincode}</span>
                            </div>
                        </div>
                        <div className="form-group row text-center mt-4">
                            <div>
                                <input type="submit" className="btn btn-primary" value="Sign in" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin

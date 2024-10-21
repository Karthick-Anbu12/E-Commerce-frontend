import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'


function Productsform() {
    const navigate=useNavigate()
    const formik=useFormik({
        initialValues:{
            name:"",
            price:"",
            description:"",
            url:""
        
        },
        validate: (values)=>{
            let error={};
              if(values.name == "" || values.password.length<=3 ){
                error.name = "Please enter a valid product name"
              }
              if(values.price == ""){
                error.price = "Please enter price "
              }
              if(values.description == "" || values.description.length<=20 ){
                error.description = "Please enter description"
              }
              if(values.url == "" || !/(?:http[s]?:\/\/.)?(?:www\.)?[-a-zA-Z0-9@%._\+~#=]{2,256}\.[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/i.test(values.url) ){
                error.url = "Please enter a valid URL"
              }
             return error
        },
        onSubmit:async(values)=>{
            await axios.post("https://e-commerce-back-end-avek.onrender.com/add-product",values,{headers: {
                Authorization: window.localStorage.getItem("mytoken")}
              })
         navigate('/adminpage')   
        }

    })
    return (<div>
        <div className='row bg-dark text-light'>
    <h1 className='text-center'> Add Product</h1>
          </div>
        <div className='container mt-5'> 
        <div className='row d-flex justify-content-center'>
            <form className='col-lg-6' onSubmit={formik.handleSubmit}>
                <div className="form-group mt-1">
                    <label for="exampleInputEmail1">Product name</label>
                    <input type="text"  id="exampleInputEmail1" name='name' value={formik.values.name} onChange={formik.handleChange} placeholder="Product name" className={`form-control ${formik.errors.name && 'is-invalid'}`}  /><span style={{color : 'red'}}>{formik.errors.name}</span>
                </div>
                <div className="form-group mt-1">
                    <label for="exampleInputPassword1">Price</label>
                    <input type="text"  name='price' value={formik.values.price} onChange={formik.handleChange} placeholder="Price" className={`form-control ${formik.errors.price && 'is-invalid'}`}  /><span style={{color : 'red'}}>{formik.errors.price}</span>
                </div>
                <div className="form-group mt-1">
                    <label for="exampleInputPassword1">Price</label>
                    <input type="text"  name='description' value={formik.values.description} onChange={formik.handleChange} placeholder="Description" className={`form-control ${formik.errors.description && 'is-invalid'}`}  /><span style={{color : 'red'}}>{formik.errors.description}</span>
                </div>
                <div className="form-group mt-1">
                    <label for="exampleInputPassword1">Image URL</label>
                    <input type="text"  name='url' value={formik.values.url} onChange={formik.handleChange} placeholder="URL" className={`form-control ${formik.errors.url && 'is-invalid'}`}  /><span style={{color : 'red'}}>{formik.errors.url}</span>
                </div>
                <button type="submit" className="btn btn-primary mt-2">Add</button>
            </form>
            </div>
        </div>
        </div>
    )
}

export default Productsform

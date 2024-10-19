import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sellerform() {
  const navigate=useNavigate()
  const formik=useFormik({
      initialValues:{
          sellerName:"",
          productType:""
      },
      validate: (values)=>{
        let error={};
        if(values.sellerName == "" ){
            error.sellerName = "Please enter valid Seller Name "
          }
          if(values.productType == "" || values.productType.length<=3 ){
            error.productType = "Please enter Catogorie"
          }
         return error
    },
      onSubmit:async(values)=>{
          await axios.post("https://e-commerce-back-end-avek.onrender.com/add-seller",values,{headers: {
              Authorization: window.localStorage.getItem("mytoken")}
            })
       navigate('/adminpage')   
      }

  })
  return (<div>
    <div className='row bg-dark text-light'>
    <h1 className='text-center'>Add Seller</h1>
          </div>
      <div className='container mt-5'> 
      <div className='row d-flex justify-content-center'>
          <form className='col-lg-6' onSubmit={formik.handleSubmit}>
              <div className="form-group mt-1">
                  <label for="exampleInputEmail1">Seller name</label>
                  <input type="text"  id="exampleInputEmail1" name='sellerName' value={formik.values.sellerName} onChange={formik.handleChange} placeholder="Seller name" className={`form-control ${formik.errors.sellerName && 'is-invalid'}`}  /><span style={{color : 'red'}}>{formik.errors.sellerName}</span>
              </div>
              <div className="form-group mt-1">
                  <label for="exampleInputPassword1">Catgories</label>
                  <input type="text" name='productType' value={formik.values.productType} onChange={formik.handleChange} placeholder="Catgories" className={`form-control ${formik.errors.productType && 'is-invalid'}`}  /><span style={{color : 'red'}}>{formik.errors.productType}</span>
              </div>
              <button type="submit" className="btn btn-primary mt-2">Add</button>
          </form>
          </div>
      </div>
      </div>
  )
}

export default Sellerform

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Productinformation() {
  const [products, setproducts] = useState([])

  const getdata = async () => {
    const info = await axios.get("http://localhost:3000/products",{headers: {
      Authorization: window.localStorage.getItem("mytoken")
    }
  })
    setproducts(info.data)
  }
  const deleteproduct=async(values)=>{
    await axios.post("http://localhost:3000/remove-product",values,{headers: {
      Authorization: window.localStorage.getItem("mytoken")}
    })
  }
  useEffect(() => {
    getdata()
  }, [])
  return (
    <div>
    <div className='row bg-dark text-light'>
    <h1 className='ms-4'>Products</h1>
          </div>
    <div className='container mt-1'>
    
     <Link  to='product-form'className='btn btn-primary' >Add Products</Link>
           <div className='d-flex flex-wrap ms-2 mt-2'>{
             products.map((product)=>{
              return(<div className='container bg-dark text-light mb-1' style={{ width: "19rem" ,height:'10rem'}}>
                <div className='mt-3'>
                 <h5> {product.name}</h5>
                 <h6>$ {product.price}</h6>
                </div>
                <div className='text-end mt-5'>
                  <button className='btn btn-primary'>Edit</button>
                  <button className='btn btn-danger ms-2' onClick={()=>deleteproduct(product)}>Delete</button>
                </div>

              </div>)
                })
          }</div>
        </div>
        </div>

    
  )
}

export default Productinformation

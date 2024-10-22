import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Productinformation() {
  const [products, setproducts] = useState([])

  const getdata = async () => {
    const info = await axios.get("https://e-commerce-back-end-avek.onrender.com/products",{headers: {
      Authorization: window.localStorage.getItem("mytoken")
    }
  })
    setproducts(info.data)
  }
  const deleteproduct=async(values)=>{
    await axios.post("https://e-commerce-back-end-avek.onrender.com/remove-product",values,{headers: {
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
                 <h6><svg xmlns="http://www.w3.org/2000/svg" width="9px"  viewBox="0 0 320 512">
                          <path d="M0 64C0 46.3 14.3 32 32 32l64 0 16 0 176 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-56.2 0c9.6 14.4 16.7 30.6 20.7 48l35.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-35.6 0c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256l80 0c32.8 0 61-19.7 73.3-48L32 208c-17.7 0-32-14.3-32-32s14.3-32 32-32l153.3 0C173 115.7 144.8 96 112 96L96 96 32 96C14.3 96 0 81.7 0 64z" />
                        </svg>{product.price}</h6>
                </div>
                <div className='text-end mt-5'>

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

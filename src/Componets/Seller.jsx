import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Seller() {
  const [sellers,setseller]=useState([])
  const getdata=async()=>{
   const info=await axios.get("http://localhost:3000/seller-info",{headers: {
    Authorization: window.localStorage.getItem("mytoken")
  }})
   setseller(info.data)
  }
  const deleteseller=async(values)=>{
    await axios.post("http://localhost:3000/delete-seller",values,{headers: {
      Authorization: window.localStorage.getItem("mytoken")}
    })
  }
  useEffect(()=>{
  getdata()
  },[])

  return (
    <div>
    <div className='row bg-dark text-light'>
    <h1 className='ms-4'>Sellers</h1>
          </div>
    <div className='container mt-1'>
    
     <Link  to='seller-form'className='btn btn-primary' >Add Seller</Link>
           <div className='d-flex flex-wrap ms-2 mt-2'>{
             sellers.map((seller)=>{
              return(<div className='container bg-dark text-light mb-1' style={{ width: "19rem" ,height:'10rem'}}>
                <div className='mt-3'>
                 <h5> {seller.sellerName}</h5>
                 <h6>{seller.productType}</h6>
                </div>
                <div className='text-end mt-5'>
                  <button className='btn btn-primary'>Edit</button>
                  <button className='btn btn-danger ms-2' onClick={()=>deleteseller(seller)}>Delete</button>
                </div>

              </div>)
                })
          }</div>
        </div>
        </div>

  )
}

export default Seller

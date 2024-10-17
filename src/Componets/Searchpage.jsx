import React, { useContext } from 'react'
import context from './Context'
import Card from './Card'

function Searchpage() {
    const {product}=useContext(context)
  return (
   
    <div className='mt-3'>
    <div className='container'><h1>Find your product ....</h1></div>
    
    <div className='container d-flex flex-wrap mb-5 col-lg-12' >
         {
product.map((data)=>{ return  <Card data={data} ></Card>})
         }
   
     </div>
     </div>

  )
}
export default Searchpage
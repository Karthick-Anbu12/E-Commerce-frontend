import React, { useContext,useState } from 'react'
import Card from './Card'
import Fltimg from './Fltimg'
import context from './Context'
import Pagination from './Pagnation'

function Products() {
  const [currentpage,setcurrentpage]=useState(1)
  const [postperpage,setpostperpage]=useState(8)
  const {datas}=useContext(context)
 const lastpostindex=currentpage*postperpage;
const firstpostindex=lastpostindex-postperpage;
  const currentpost=datas.slice(firstpostindex,lastpostindex)
  return (
    <>
      <Fltimg></Fltimg>
      <div className='container d-flex flex-wrap  mb-5 col-lg-12 background '>
        {
          
          currentpost.map((data)=>{
            return <Card data={data} ></Card>
          })
       
        }
               
        </div>
        <div className=' container d-flex justify-content-center'>
        <Pagination  totalPosts={datas.length} postperpage={postperpage} setcurrentpage={setcurrentpage} />
        </div>
</>
  

  )
}

export default Products

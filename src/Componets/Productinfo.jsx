import React, { useContext, useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'
import context from './Context'
import axios from 'axios'
function Productinfo() {

  let params = useParams()
  const { additem } = useContext(context)
  const [info, setinfo] = useState([])
  const getdata = async () => {
    try {
      const res = await axios.get(`https://e-commerce-back-end-avek.onrender.com/productinfo/${params.id}`, {
        headers: {
          Authorization: window.localStorage.getItem("mytoken")
        }
    })
      setinfo(res.data)
    } catch (error) {
      console.log("something went wrong")
    }
  }
  useEffect(() => {
    getdata()
  }, [])

  return (
    <div className='background'>
      <section class="py-5">
        <div class="container ">
          <div class="row ">
            <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src={`${info.url}`} style={{height:'100vh'}} alt="..." /></div>
            <div class="col-md-6">
              <h1 class="display-5 fw-bolder">{info.name}</h1>
              <div class="fs-5 mb-5">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="10px" viewBox="0 0 320 512">
                          <path d="M0 64C0 46.3 14.3 32 32 32l64 0 16 0 176 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-56.2 0c9.6 14.4 16.7 30.6 20.7 48l35.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-35.6 0c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256l80 0c32.8 0 61-19.7 73.3-48L32 208c-17.7 0-32-14.3-32-32s14.3-32 32-32l153.3 0C173 115.7 144.8 96 112 96L96 96 32 96C14.3 96 0 81.7 0 64z" />
                        </svg>
                        </span>{info.price}
              </div>
              <p class="lead">{info.description}</p>
              <div class="d-flex">
                <button class="btn btn-outline-dark flex-shrink-0" type="submit" onClick={() => additem(info)}>
                  <svg xmlns="http://www.w3.org/2000/svg"  className="me-1" width="20px" viewBox="0 0 576 512">
                    <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Productinfo

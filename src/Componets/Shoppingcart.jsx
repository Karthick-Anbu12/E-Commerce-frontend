import React from 'react'
import { useContext, useState, useEffect } from 'react'
import context from './Context'
import axios from 'axios'

function Shoppingcart() {
  const { cart, total, removeitem, checkout, isLoggedIn } = useContext(context)


  return (
    <div className='background shoppingcart'>
      <div className='container '>
        {
          <div className='row'>
            <div className='mt-5 col-lg-9'>
              {
                isLoggedIn && <ul className="list-group list-group-flush">
                  {cart.map((item, index) => {
                    return <div className='row mt-1'>
                      <img src={`${item.url}`} alt="" style={{ width: "5rem", height: '5rem' }} />
                      <div className='col-lg-8'>
                        <li className="list-group ms-2">{item.name}<div><h6><span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="10px" viewBox="0 0 320 512">
                          <path d="M0 64C0 46.3 14.3 32 32 32l64 0 16 0 176 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-56.2 0c9.6 14.4 16.7 30.6 20.7 48l35.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-35.6 0c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256l80 0c32.8 0 61-19.7 73.3-48L32 208c-17.7 0-32-14.3-32-32s14.3-32 32-32l153.3 0C173 115.7 144.8 96 112 96L96 96 32 96C14.3 96 0 81.7 0 64z" />
                        </svg>
                        </span> {item.price}</h6></div></li>
                      </div>
                      <div className='col-lg-2'>
                        <button className='btn btn-danger' onClick={() => removeitem(index)} >Remove</button>
                      </div>

                    </div>
                  })
                  }
                </ul>
              }
              {
                !isLoggedIn && <h3>Login Continue Shopping !!!</h3>
              }
              <hr />
              <div className='text-end'><h4>Subtotal: <span>
              </span><svg xmlns="http://www.w3.org/2000/svg" width="10px" viewBox="0 0 320 512">
                          <path d="M0 64C0 46.3 14.3 32 32 32l64 0 16 0 176 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-56.2 0c9.6 14.4 16.7 30.6 20.7 48l35.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-35.6 0c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256l80 0c32.8 0 61-19.7 73.3-48L32 208c-17.7 0-32-14.3-32-32s14.3-32 32-32l153.3 0C173 115.7 144.8 96 112 96L96 96 32 96C14.3 96 0 81.7 0 64z" />
                        </svg>
                         {total.toFixed(2)}</h4>
              </div>
            </div>
            <div className=' text-center mt-5 col-lg-3 border border-dark rounded' >
              <h5 className='mt-1'>Pay Via</h5>
              <img src="https://miro.medium.com/v2/resize:fit:1000/0*BIy_CblCTVoOl5Zg" style={{ width: "18rem", height: '10rem' }} className=' col-lg-11 rounded-2 mt-2' alt="" />

              <button className='btn btn-warning rounded-pill m-2' onClick={() => checkout()}>Proceed to Checkout</button>
            </div>
          </div>
        }
      </div>
    </div>

  )
}

export default Shoppingcart

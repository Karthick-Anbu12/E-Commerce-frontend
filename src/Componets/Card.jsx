import React, { useContext } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import context from './Context';

function Card({ data }) {
    const { additem } = useContext(context)
    return (

        <div className='m-2  mt-4 productcard rounded-3 '>
            <div className="text-dark h-100 rounded-3 " style={{ width: "19rem", height: '20rem' }}>
                <Link className='Card text-dark mt-2' to={`productinfo/${data._id}`}>
                    <img className="card-img-top rounded-top-3" style={{ width: "19rem", height: '350px' }} src={`${data.url}`} alt="..." />
                    <div className="card-body ">
                        <div className="text-center">
                            <h5 className="fw-bolder">{data.name}</h5>
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9px"  viewBox="0 0 320 512">
                          <path d="M0 64C0 46.3 14.3 32 32 32l64 0 16 0 176 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-56.2 0c9.6 14.4 16.7 30.6 20.7 48l35.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-35.6 0c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256l80 0c32.8 0 61-19.7 73.3-48L32 208c-17.7 0-32-14.3-32-32s14.3-32 32-32l153.3 0C173 115.7 144.8 96 112 96L96 96 32 96C14.3 96 0 81.7 0 64z" />
                        </svg> {data.price}</span> 
                        </div>
                    </div>
                </Link>
                <div className="card-footer border-top-0 bg-transparent p-3">
                    <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={() => additem(data)}>Add to Cart</button></div>
                </div>
            </div>
        </div>

    )
}

export default Card

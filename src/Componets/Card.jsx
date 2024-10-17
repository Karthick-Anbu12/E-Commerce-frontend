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
                            $ {data.price}
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

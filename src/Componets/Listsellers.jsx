import React from 'react'

function Listsellers({seller}) {
  
  return (
    <div className='container mt-1'>
    <ol class="list-group list-group-numbered ">
        <li class="list-group-item d-flex justify-content-between align-items-start bg-dark text-light">
            <div class="ms-2 me-auto">
                <div class="fw-bold">{seller.sellername}</div>
                {seller.products}
            </div>
            <button class=" btn btn-light">View</button>
            <button class=" btn btn-primary ms-1 me-1">Edit</button>
            <button class=" btn btn-danger">Delete</button>
        </li>
    </ol>
</div>
  )
}

export default Listsellers

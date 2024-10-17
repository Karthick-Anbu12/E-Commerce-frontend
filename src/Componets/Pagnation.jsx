import React from "react";

function Pagination ({totalPosts,postperpage,setcurrentpage})
 {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postperpage); i++) {
        pages.push(i);
    }

    return (
        <div className='pagination'>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setcurrentpage(page)}
                        className="btn btn-outline-primary m-1">
                        {page} 
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;
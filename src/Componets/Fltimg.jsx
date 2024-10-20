import React from 'react'

function Fltimg() {
  return (
    <div className='fltimg'>
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://images.vexels.com/media/users/3/194732/raw/90137aa80ed4d208bc0cda1fc224cfff-online-shopping-web-slider.jpg" class="d-block w-100 fltimg" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://images.vexels.com/media/users/3/194732/raw/90137aa80ed4d208bc0cda1fc224cfff-online-shopping-web-slider.jpg" class="d-block w-100 fltimg" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://images.vexels.com/media/users/3/194732/raw/90137aa80ed4d208bc0cda1fc224cfff-online-shopping-web-slider.jpg" class="d-block w-100 fltimg" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  )
}

export default Fltimg

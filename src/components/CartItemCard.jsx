import React from 'react'

const CartItemCard = () => {
    return (
        <div>
           <div class="card mb-3" style={{maxWidth:"840px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
       
        <a   href="#" className="btn btn-primary my-3 me-3">Buy now</a>
        <a   href="#" className="btn btn-success my-3">Add more</a>

      </div>
    </div>
  </div>
</div> 
        </div>
    )
}

export default CartItemCard

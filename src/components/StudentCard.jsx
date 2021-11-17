import React from 'react'
 import "./studentcard.css"

const StudentCard = ({card}) => {
    console.log(card);
    return (
        <>
        {card.map((curElm)=>{
           
             return(
            
<div className="card-container col-md-4 my-3 bg-light ms-4 shadow" style={{borderRadius:"15px"}}>
<div className=" card-text-center p-3" >
    <div className="card-img-top-fluid">
        <img src={curElm.image} width="100%" style={{height:"200px" ,objectFit: "cover"}} alt="" />
    </div>
    <div className="card-body-text-dark text-cont pt-2">
        
        <div className="d-flex justify-content-between">
        <div>
            <h4 className="card-title"style={{marginRight:"17px"}}>{curElm.name}</h4>
        </div >
<div className="d-flex justify-content-center">
        <div className="me-3" >
            
        <svg style={{marginTop:"9px",marginRight:"0px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
        </svg>
        
        </div>
        <div >
        <svg  style={{marginTop:"10px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
        </svg>
        </div>
        </div>
        </div>
        <div className="text-main">
            <p>Price : {curElm.price} Rs.</p>
        <p className="card-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit adipisci error repellat neque rem quidem possimus illo harum corrupti at?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        </div>
        
        <a   href="#" className="btn btn-primary my-3 me-3">Buy now</a>
        <a   href="#" className="btn btn-success my-3">Add to cart</a>
    </div>
</div>
</div> 
   
//         <div className="col-md-4 my-3">
//             <div class="card" style={{width: "22rem"}}>
//          <img class="card-img-top img-fluid" src={img} width="100%" style={{height:"200px", objectFit: "cover"}} alt="Card image cap" />
//          <div class="card-body">
//            <h5 class="card-title">Card title</h5>
//            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//            <a href="#" class="btn btn-primary">Go somewhere</a>
//          </div>
// </div>
//         </div>
    )


        })}
        
        
        
      </>  
        
    )
}

export default StudentCard

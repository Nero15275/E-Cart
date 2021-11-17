import React from 'react'
import { NavLink  } from 'react-router-dom'
import "./navber.css"




const Navber = () => {
    return (
       <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
  <div class="container-fluid">
    <NavLink className="nav-link active" class="navbar-brand" exact to="/home">E-cart</NavLink >
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item nav_list_item">
          <NavLink className="nav-link active" class="nav-link active" aria-current="page" exact to="/home">Home</NavLink >
        </li>
        <li className="nav-item nav_list_item">
          <NavLink className="nav-link active" class="nav-link" to ="/AboutUs">About Us</NavLink >
        </li>
        <li className="nav-item nav_list_item">
          <NavLink className="nav-link active"  class="nav-link" exact to="/ContactUs">Contact Us</NavLink >
        </li>
        <li className="nav-item nav_list_item">
          <NavLink className="nav-link active" class="dropdown-item" exact to="/Login">Sign in</NavLink >
        </li>
            
           <li className="nav-item nav_list_item">
          <NavLink className="nav-link active"  class="nav-link" exact to="/SignUp">Sign up</NavLink >
        </li>
        <li className="nav-item nav_list_item" style={{paddingLeft:"70px"}} >
        <form class="d-flex">
        <input class="form-control me-2 " style={{width:"40rem"}} type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
        </li>
       
        
      </ul>

      <ul>
      <li class="d-flex"style={{paddingLeft:"3px"}}>
          <NavLink  className="nav-link active" class="nav-link"  exact to="/Cart"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16" >
  <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg></NavLink >
        </li>
      </ul>
     
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navber

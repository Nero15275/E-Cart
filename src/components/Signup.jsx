import React from 'react'
import { NavLink } from 'react-router-dom'
import "./signup.css"

const Signup = () => {
    return (
        <div className="sroot" style={{height:"100vh",width:"100vw"}}>
            <form class=" row g-3  shadow bg-light " style={{width:"500px",padding:"25px",borderRadius:"15px"}}>
              <h4 className="hedi ">Sign Up</h4>
  <div class="col-md-12">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>

  <div class="col-12">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Accept all
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary"style={{backgroundColor:"#417723"}}>Sign Up</button>
    <p style={{paddingTop:"10px"}}>Alredy a user </p>
  <NavLink exact to="/Login" style={{paddingTop:""}}>Login here</NavLink>
  </div>
</form>
        </div>
    )
}

export default Signup

import React from 'react'
import { NavLink } from 'react-router-dom'
import "./login.css"

const Login = () => {
    return (
        <div>
            <div style={{height:"100vh",width:"100vw"}}  className="rootf">
      <div className="formBody bg-light shadow " style={{ height:"600px",width:"500px",borderRadius:"12px",padding:"25px"}}>
       <form >
      <h4 className="mb-3" style={{paddingLeft:"11rem"}}>Sign In</h4>
  <div class="mb-5 ">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"autoComplete="false"/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div class="mb-5 ">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"autoComplete="false"/>
  </div>
  <div class="mb-5 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"autoComplete="false"/>
    <label class="form-check-label" for="exampleCheck1">Remember me</label>
  </div>
  <div className="signup row">
  <button type="submit" class="btn btn-primary "style={{marginRight:"1rem"}}>Login</button>
  <p style={{padding:"2rem"}}>Don't have an Account </p>
  <NavLink exact to="/Signup" style={{paddingLeft:"2rem"}}>Sign Up here</NavLink>
  </div>

</form>
</div>
    </div>
        </div>
    )
}

export default Login

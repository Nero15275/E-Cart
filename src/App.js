import React,{useState} from 'react'
import "./app.css"
import Login from './components/Login'
import Navber from './components/Navber'
import Signup from './components/Signup'
import {Routes, Route } from 'react-router-dom'
import StudentCard from './components/StudentCard'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Home from './components/Home'
import catagory from './components/CardApi'
import Cart from './components/Cart'

 
const App = () => {
  
  return (
    
    <div className="rootapp">
    <Navber />
    
    <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/AboutUs" element={<AboutUs/>}/>
        <Route exact path="/ContactUs" element={<ContactUs/>}/>
        <Route exact path="/Signup" element={<Signup/>}/>
        <Route exact path="/Cart" element={<Cart/>}/>
        
        
        
      
    </Routes>
  
    

    </div>
 
   
    
    
    
  )
}

export default App


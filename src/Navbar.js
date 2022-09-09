import './Navbar.css';
import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    
    <>
      <nav className="navbar navbar-expand-lg  bg-dark ">

    <div className="container-fluid ">
        <Link className="navbar-brand text-info  font-30" to="./Home">Employee++</Link>

    <button className="navbar-toggler m-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


    <div className="collapse navbar-collapse justify-content-center " id="navbarNavAltMarkup">
      <div className="navbar-nav  ">

      
      <ul class="navbar-nav  menu-right  " >
        <li class="nav-item">

          <Link class="nav-link  p-2 ms-4 " aria-current="page" to="./Home">
          <button type="button" class="btn btn-outline-light button-custom button-border-custom">Home</button>
            </Link>

        </li>

        <li class="nav-item">

          <Link class="nav-link  p-2 ms-4" to="./AddEmployee">
          <button type="button" class="btn btn-outline-light button-custom button-border-custom">Add Employee</button>
            
            </Link>

        </li>
        <li class="nav-item">

          <Link class="nav-link  p-2 ms-4" to="./About">
          <button type="button" class="btn btn-outline-light button-custom button-border-custom">About</button>
            
            </Link>

        </li>


        <li class="nav-item justify-content-end">
   
   <Link class="nav-link p-2 ms-4" aria-current="page" to="./Signin">
    
   <button type="button" class="btn btn-outline-light button-sign button-border-custom">Sign in</button>
    </Link>
  
  </li>

        
        


      </ul> 
      
      </div>
    </div>
  </div>
</nav>

        
      </>
      
    
  )
}


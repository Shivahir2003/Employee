import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home';
import  './index.css';
import Navbar from './Navbar';
import Footer from './Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './Layout';
import AddEmployee from './AddEmployee';
import About from './About';
import Signin from './Signin';
import EmployeeDetail from './EmployeeDetails';
// import EmployeeDetails from './EmployeeDetials';



const root = ReactDOM.createRoot(document.getElementById('root'));
 

root.render(
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout />}>
    <Route path='/Home' element=  {<Home />}></Route>
    <Route path="/Home/:id" element={<EmployeeDetail />}></Route>
    
    <Route path="/AddEmployee" element={<AddEmployee />}></Route>
    <Route path="/EditEmployee/:id" element={<AddEmployee />}></Route>

    <Route path="/About" element={<About />}></Route>
    <Route path="/Signin" element={<Signin />}></Route>

    

    </Route>
  </Routes>
  </BrowserRouter>
  
  


  


  </>
);  
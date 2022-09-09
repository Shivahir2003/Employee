import React from 'react'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import AddEmployee from './AddEmployee';
import './Home.css';

export default function Home() {

	const [employees, setemployees] = useState([]);
    useEffect(
    ()=>{
        fetch("https://62dbe4c657ac3c3f3c50fcfe.mockapi.io/Employee")
        .then((res)=> {
            return res.json();
        })
        .then((res)=> {
            setemployees(res);
        });
    },[]);

    const formatedemployee = employees.map((emp) => {
        return(
            <>
          
		<div class="main-container">
			<div class="poster-container">
				<Link to={"../Home/" + emp.id }><img src={emp.EmployeeImage} class="poster" /></Link>
			</div>
			<div class="ticket-container">
				<div class="ticket__content">
                    
					<h4 class="ticket__movie-title">{emp.EmployeeName}</h4>
					
					<p class="ticket__current-price">{emp.EmployeeCode}</p>
					<Link to={"../Home/" + emp.id } >
					<button class="ticket__buy-btn">
					More Info
					</button>
					</Link>
				</div>
			</div>
		</div>

	    
   

            
            </>
        )
    })
    return (
    <>





    

    <div className="row">
		<div class="hero-container display-flex ">
        {formatedemployee}
		</div>

    </div>
        
    
    </>

    );
}

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './EmployeeDetails.css';

function EmployeeDetail() {
    let params = useParams();

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({});

    useEffect(()=> {
        fetch("https://62dbe4c657ac3c3f3c50fcfe.mockapi.io/Employee/" + params.id)
        .then(
            (res) => {
                return res.json();
        })
        .then(
            (res)=> {
                setEmployee(res);
        });
    },[])

    return (
       <>
       <div class="container">
	<div class="avatar">
		
			<img src={employee.EmployeeImage} alt="Skytsunami" />
	</div>


	<div class="content">
      <span className="detail">Employee Name</span>
		<h1 className="emp-name">{employee.EmployeeName}</h1>
      <span className="detail">Employee Code</span>
		<h3 className="emp-code">{employee.EmployeeCode}</h3>
      <span className="detail">Employee Mail</span>
    <h2 className="emp-mail"> {employee.EmployeeEmail}</h2>
      <span className="detail">Employee Mobile</span>
    <h2 className="emp-num">{employee.EmployeeMobie}</h2>
      <span className="detail">Date Of Join</span>
    <h1 className="emp-join">{employee.EmployeeDateOfJoin}</h1>
		
		
    <Link to={"../Home"}>
              <button  class="btn btn-size btn-Back">
                Back
              </button>
            </Link>


        <button className="btn btn-size btn-delete"
              onClick={() => {
                fetch(
                  "https://62dbe4c657ac3c3f3c50fcfe.mockapi.io/Employee/" +
                    params.id,
                  {
                    method: "DELETE"
                  }
                ).then((res) => {
                  navigate("/Home");
                });
              }}
            >
              Delete
            </button>


            <button class="btn btn-size btn-edit"
              onClick={() => {
                navigate("/EditEmployee/" + params.id);
              }}
            >
              Edit
            </button>
	</div>
</div>




       
       
       </>
    );

}
export default EmployeeDetail;
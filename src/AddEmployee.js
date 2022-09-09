import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './AddEmployee.css';

export default function AddEmployee() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    if (params.id > 0) {
      fetch(
        "https://62dbe4c657ac3c3f3c50fcfe.mockapi.io/Employee/" + params.id,
        {
          method: "GET"
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res);
        });
    }
  }, []);

  return (
    <>
    <div className="container">
      <table align="center">
        <tr>
          <td > Employee Name</td>
          <td>{'==>'}</td>
          <td>
            <input
              value={data.EmployeeName}
              onChange={(e) => {
                setData({ ...data, EmployeeName: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td>Employee Image</td>
          <td>{'==>'}</td>
          <td>
            <input
              value={data.EmployeeImage}
              onChange={(e) => {
                setData({ ...data, EmployeeImage: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>

        <tr>
          <td>Employee Code</td>
          <td>{'==>'}</td>
          <td>
            <input
              value={data.EmployeeCode}
              onChange={(e) => {
                setData({ ...data, EmployeeCode: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td>Employee Mobile</td>
          <td>{'==>'}</td>
          <td>
            <input
              value={data.EmployeeMobie}
              onChange={(e) => {
                setData({ ...data, EmployeeMobie: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td>Employee Email</td>
          <td>{'==>'}</td>
          <td>
            <input
              value={data.EmployeeEmail}
              onChange={(e) => {
                setData({ ...data, EmployeeEmail: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td colSpan="3" align="center">
            <button className="btn button-form"
              onClick={() => {
                if (params.id > 0) {
                  fetch(
                    "https://62dbe4c657ac3c3f3c50fcfe.mockapi.io/Employee/" +
                      params.id,
                    {
                      method: "PUT",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json"
                      }
                    }
                  ).then(() => {
                    navigate("/Home");
                  });
                } else {
                  fetch(
                    "https://62dbe4c657ac3c3f3c50fcfe.mockapi.io/Employee/",
                    {
                      method: "POST",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json"
                      }
                    }
                  ).then(() => {
                    navigate("/Home");
                  });
                }
              }}
            >
              {params.id > 0 && "Edit  "}
              {!(params.id > 0) && "Add  "}
              Employee
            </button>
          </td>
        </tr>
      </table>
      </div>
    </>
  );
}

import React from "react";
import useFetch from "./useFetch";
import { useParams, useNavigate } from "react-router-dom";


const StaffDetails = () => {
    const { id } = useParams();
    const { data: staff, error, isPending } = useFetch(`http://localhost:8000/staff/${id}`);
    const title = "Welcome to our app!";
    const description = "This is our staff tracking app.";

    const navigate = useNavigate();

    const handleClick = () => {
        fetch(`http://localhost:8000/staff/${id}`,{
            method:'DELETE'
        }).then(() => {
            navigate('/')
        })
    }
    
    return (
        <div className="content">
            <h1>{title}</h1>
            <p>{description}</p>
            <hr />
            <br />


            <div className="staff-details">
                {isPending && <div align="center">Loading</div>}
                {error && <div align="center">{error}</div>}
                {staff && (
                    <div align="center">
                        <h2>{staff.Name}</h2>
                        <p>{staff.Position}</p>
                        <p>{staff.Department}</p>
                        <p>{staff.Salary}</p>
                        <button onClick={handleClick}>Fire</button>
                    </div>
                )}
            </div>
        </div>
    );
};


export default StaffDetails;

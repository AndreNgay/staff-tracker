import React from "react";
import useFetch from "./useFetch";
import StaffList from "./StaffList";


const Home = () => {
    const title = "Home";
    const description = "";


    const { data: staff, isPending, error } = useFetch("http://localhost:8000/staff");
    return (
        <div className="content">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="Home">
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {staff && <StaffList staff={staff} staffList="Our Staff: " />}
            </div>
        </div>
    );
};


export default Home;
import React from "react";
import { Outlet, Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="">
            <nav className="navbar">
                <h1>Staff Tracker</h1>
                <div className="links">
                    <Link to="/home">Home</Link>
                    <Link to="/create">Hire Staff</Link>
                    <Link to="/aboutUs">About Us</Link>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};


export default Navbar;

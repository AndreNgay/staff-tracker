import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import Home from "./Home";
import Navbar from "./Navbar";
import StaffDetails from "./StaffDetails";
import './styles.css';
import Create from "./Create";
import NotFound from "./NotFound";


function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                    <Route path="/staff/:id" element={<StaffDetails />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}


export default App;

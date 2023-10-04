import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Imaginibus</h1>
            <div className="links">
                <Link to="/home" >Home</Link>
                <Link to="/profile" >Profile</Link>
                <Link to="/login" >login</Link>
            </div>
        </nav>
    );
}

export default Navbar;
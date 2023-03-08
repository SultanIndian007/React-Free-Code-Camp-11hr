import React from "react";
import favicon from "../Images/favicon.ico"
import "./Navbar.css"

function Navbar(){
    return (
        <nav className="nav">
            <img src={favicon} alt="logo" />
            <h3>React Facts</h3>
            <h4 className="h4">React Course- Project 1</h4>
        </nav>
    )
}
export default Navbar
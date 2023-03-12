import React from "react"
import "./App.css"
import logo from "../Images/airbnb.jpeg"

export default function Navbar(){
  return(
    <div className="app">
      <nav className="nav--logo">
        <img className="logo" src={logo} alt=""></img>
      </nav>
    </div>
  )
}
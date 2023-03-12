import React from "react"
import "./App.css"
import head from "../Images/head.jpeg"


export default function Hero(){
  return(
    <section className="hero">
        <img className="head" src={head} alt=""></img>
        <h1>Online Experiences</h1>
        <p>Join unique interaction activities led by 
            one-of-a-kind hosts - all without leaving home.
        </p>
    </section>
  )
}
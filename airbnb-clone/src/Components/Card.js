import React from "react";
import "./App.css"
import star from "../Images/star.jpeg"

export default function Card(props){
    console.log(props)
    return(
        <div className="card">
            <img className="card--image" src={props.img} alt=""></img>
            <div className="card--stats">
                <img className="card--star" src={star} alt=""></img>
                <span>{props.rating}</span>
                <span className="gray">(6) . </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zafares</p>
            <p><span className="bold">From $136</span>/ person</p>
        </div>
    )
}
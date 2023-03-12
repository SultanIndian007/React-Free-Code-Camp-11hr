import React from "react";
import "./App.css"
import s1 from "../Images/s1.jpeg"
import star from "../Images/star.jpeg"

export default function Card(){
    return(
        <div className="card">
            <img className="card--image" src={s1} alt=""></img>
            <div className="card--stats">
                <img className="card--star" src={star} alt=""></img>
                <span>5.0</span>
                <span className="gray">(6) . </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zafares</p>
            <p><span className="bold">From $136</span>/ person</p>
        </div>

    )
}
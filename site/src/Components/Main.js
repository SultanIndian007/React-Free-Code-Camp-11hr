import React from "react";
import "./Main.css"
function Main(){
    return (
        <main className="main">
            <h1>Fun Facts about React</h1>
            <ul className="main--facts">
                <li>Was released in 2019</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powered thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}
export default Main
import Header from "./Header"
import React from "react"
import ReactDOM  from "react-dom"
import Body from "./Body"
import Footer from "./Footer"

function App (){
    return(
        <div>
            <Header />
            <Body />
            <Footer/>
        </div>
    )
}

ReactDOM.render(<App />,document.getElementById("root"))
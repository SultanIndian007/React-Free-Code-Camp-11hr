// import React from "react"
const page = (
    <div>
        <h1 className="heading">ajfla</h1>
        <h3>adl</h3>
        <ol>
            <li>A</li>
            <li>B</li>
            <li>C</li>
        </ol>
    </div>
)

ReactDOM.render(page,document.getElementById("root"))
// document.getElementById("root").append(JSON.stringify(page))

const navbar = (
    <nav>
        <h1>Quad 2.0</h1>
        <ul>
            <li>PRICING</li>
            <li>CONTACT</li>
            <li>About</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar,document.getElementById("root"))

/* const h1 = document.createElement("h1")
h1.textContent="Imperative way"
h1.className="header"
document.getElementById("root").append("h1")

const element=<h1 className="header">This is JSX</h1>
console.log(element)

ReactDOM.render(element,document.getElementById("root")) */

//JSX

const page = (
    <div>
        <h1 className="header">JSX it is</h1>
        <p>JSX it is cool!!</p>
    </div>
)

console.log(page)
ReactDOM.render(
    page,
    document.getElementById("root")
)
/* ReactDOM.render(
    <ul>
        <li>A</li>
        <li>V </li>
    </ul>,
    document.getElementById("root"))

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"

// Afterward, render it below the Navbar (which
// you can do inside the ReactDOM.render call below)

function MainContent() {
    return (
        <h1>Hello</h1>
    )
}

ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById("root")
) */
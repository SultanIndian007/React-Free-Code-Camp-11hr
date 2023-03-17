import React from "react"

export default function Joke(props) {
    console.log(props.comments)
    return (
        <div>
            {props.Setup && <h3>Setup: {props.Setup}</h3>}
            <p>Punchline: {props.Punchline}</p>
            <p>Upvotes</p>
            <hr/>
        </div>
    )
}


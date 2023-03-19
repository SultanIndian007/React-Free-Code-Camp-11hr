import React from "react"
import Joke from "./Joke"
import jokesdata from "./jokesdata"

export default function App() {
  const jokeElements = jokesdata.map(joke => {
    return <Joke Setup={joke.setup} Punchline={joke.punchline}/>
  })
    return (
        <div>
            {jokeElements}
        </div>
    )
  }
  {/* <Joke 
    Punchline="It's hard to explain puns to kleptomaniacs because 
    they always take things literally."
    isPun={false}
    upVotes={2}
    downVotes={1}
    comments = {[{author: "",body: "",title:""}]}
    />
  <Joke 
    Setup = "I got my daughter a fridge for her birthday."
    Punchline="I can't wait to see her face light up when she opens it. "
    isPun={false}
  />
  <Joke 
    Setup=" How did the hacker escape the police?"
    Punchline=" He just ransomware!"
    isPun={true}
    />
  <Joke 
    Setup=" Why don't pirates travel on mountain roads?"
    Punchline=" Scurvy."
    isPun={true}
    />
  <Joke 
    Setup=" Why do bees stay in the hive in the winter?"
    Punchline=" Swarm."
    isPun={true}
    />
  <Joke             
    Setup=" What's the best thing about Switzerland?"
    Punchline=" I don't know, but the flag is a big plus!"
    isPun={false}
  /> */}
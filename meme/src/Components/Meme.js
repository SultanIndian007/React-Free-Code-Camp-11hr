import React from "react";
import "./Meme.css";
import memesData from ".././memedata";

function Meme() {
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    console.log(url);
  }
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top Text" className="inputs" />
        <input type="text" placeholder="Punchline" className="inputs" />
        <button onClick={getMemeImage} className="btn">
          Get a new meme image 💎
        </button>
      </div>
    </main>
  );
}

export default Meme;

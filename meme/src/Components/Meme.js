import React, { useState } from "react";
import "./Meme.css";
import memesData from ".././memedata";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
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
      <img src={memeImage} className="meme--img" alt="" />
    </main>
  );
}

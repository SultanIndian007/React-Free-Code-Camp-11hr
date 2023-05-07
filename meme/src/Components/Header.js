import troll from "../images/troll-face.png";
import "./Header.css";

function App() {
  return (
    <header className="header">
      <img className="troll" src={troll} alt="troll" />
      <h2 className="title">Meme Generator</h2>
      <h4 className="project">React Course - Project 3</h4>
    </header>
  );
}

export default App;

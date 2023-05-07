import "./index.css"
import img from "../Images/me3.jpeg"
import licon from "../Images/licon.png"
import eicon from "../Images/email-icon.png"

function Intro (){
    return (
        <div className="intro">
            <div className="intro2">
                <img src={img} className="prof-img" alt={"my-prof-pic"}></img>
                <h1>Aman Tiwari</h1>
                <h4>Frontend Developer</h4>
                <h6>amantiw.com</h6>
                <div className="btns">
                <button id="email">
                    <img src={eicon} alt="null"/>
                    Email
                </button>
                <button id="linkedin">
                    <img src={licon} alt=""/>
                    LinkedIn</button>
                </div>
            </div>
        </div>
    )
}

export default Intro 
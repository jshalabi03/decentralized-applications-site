import React from 'react';
import './Header.css';
import Background2 from '../../Files/Videos/paint.mp4';
import Typewriter from 'typewriter-effect'

function Header() {
    return(
        <div className = 'header-container'>
            <p></p>
            <video autoPlay loop muted style = {{
                position: "absolute", width: "100%", left: "50%", top: "60%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%", opacity: "1", playbackRate: "50%"}}>
                <source src = {Background2} type = "video/mp4"/>
            </video>
            <div className= 'typewriter'>
                <Typewriter 
                  onInit={(typewriter) => {
                    typewriter.typeString("University of Illinois Urbana-Champaign")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Computer Science + Economics")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Kazmain Shah")
                    .pauseFor(1000)
                    .start();
                  }}
                />
            </div>
            <div className='button'>
                <button> Get Started</button>
                <button> Contact Us </button>
            </div>

        </div>
    );
}

export default Header;


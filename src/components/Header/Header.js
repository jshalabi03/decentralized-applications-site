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
                    typewriter.typeString("Why Decentralize?")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Why Blockchain?")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Why Web3?")
                    .pauseFor(2000)
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


import React from 'react';
import './Header.css';
import Background from '../../Files/Videos/newvid.mp4';

function Header() {
    return(
        <div className = 'header-container'>
            <p></p>
            <video autoPlay loop muted style = {{
                position: "absolute", width: "100%", left: "50%", top: "60%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%", opacity: "1", playbackRate: "50%"}}>
                <source src = {Background} type = "video/mp4"/>
            </video>
            <h1></h1>
        </div>
    );
}

export default Header;


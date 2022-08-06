import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import { Button } from "./Button"
import './Navbar.css'
import Image from '../../Files/Images/logo.jpg';
import Image2 from '../../Files/Images/logo2.png';
import Image3 from '../../Files/Images/logoTransparent.png';



class Navbar extends Component {
    state = { clicked: false } 
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }


    render() {
        return(
            <nav className = "NavbarItems">
                
                <img src = {Image3} className = "navbar-logo"/>
                <div className="menu-icon" onClick = {this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'} >
                    {MenuItems.map((item, index) => {
                        return(
                            <li key = {index}>
                                <a className = {item.cName} href={item.url}>
                                {item.icon}{item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar
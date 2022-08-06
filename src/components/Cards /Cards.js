import React from 'react';
import Image from '../../Files/Images/logo192.png';
import './Cards.css';

function Cards(props) {
    return(
      <div className="wrapper">
        <div className= "card">
          <div className= "card__body">
            <img src = {props.image} />
            <h2 className = "card__title">{props.title}</h2>
            <p className = "card__description">{props.description}</p>
          </div>
          <button className= "card__btn">View</button>
        </div>
      </div>
    );
}
export default Cards;


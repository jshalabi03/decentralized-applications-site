import React from 'react';

function Cards(props) {
    return(
        <div className= "card">
            <div className = "card-body">
                <img src = {props.img} />
                <h2 clasName = "card-title"></h2>
                <p className = "card-description"></p>
            </div>
            <button className = "card__btn"> View</button>
        </div>
    );
}

export default Cards;


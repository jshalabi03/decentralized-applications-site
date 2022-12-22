import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import plane from '../../Files/Images/Plane.jpeg';
import tic from '../../Files/Images/tictactoe.jpeg';
import inf from '../../Files/Images/inflation.jpg';
import alt1 from '../../Files/Images/matic.jpg';
import bnb from '../../Files/Images/bnb.jpg';


function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src= {plane}
              text='OpenFlights Project '
              label='C++'
              path='/home'
            />
            <CardItem
              src= {tic}
              text = 'TicTacToe Project'
              label='Python'
              path='/home'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
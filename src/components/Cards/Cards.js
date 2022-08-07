import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import btc from '../../Files/Images/btc.jpg';
import eth from '../../Files/Images/eth.jpg';
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
              src= {btc}
              text='What is Bitcoin?'
              label='Bitcoin'
              path='/home'
            />
            <CardItem
              src= {eth}
              text='What is Ethereum?'
              label='Ethereum'
              path='/home'
            />
            <CardItem
              src= {inf}
              text='How can Crypto help inflation?'
              label='Economy'
              path='/home'
            />
            <CardItem
              src= {alt1}
              text='What is matic?'
              label='Alt-coin'
              path='/home'
            />
            <CardItem
              src= {bnb}
              text='What is Binance?'
              label='Bitcoin'
              path='/home'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
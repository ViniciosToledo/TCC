import React from 'react';
import './cardItem.css'


const CardItem = (props) => {
  return (
    <>
        <div className='cardItem'>
          <div className='imgContainer'>
            <img src={props.image} alt={props.alt} />
          </div>
            <h2>{props.alt}</h2>
        </div>
    </>
  );
};

export default CardItem;
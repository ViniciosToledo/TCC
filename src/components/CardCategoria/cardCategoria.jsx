import React from 'react';
import './cardCategoria.css'


const CardCategoria = (props) => {
  return (
    <>
        <div className='cardCategoria'>
            <img src={props.image} alt={props.alt} />
            <h2>{props.alt}</h2>
        </div>
    </>
  );
};

export default CardCategoria;
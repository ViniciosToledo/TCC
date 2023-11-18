import React from 'react';
import './titulo.css'
const Titulo = (props) => {
  return (
    <div className='titulosContainer'>
      <h1 className='elemento1'>{props.titulo}</h1>
      <h1 className='elemento2'>{props.titulo}</h1>
    </div>
  
    
  );
};

export default Titulo;
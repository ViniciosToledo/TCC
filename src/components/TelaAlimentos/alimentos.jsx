import React from 'react';
import Titulo from '../Titulo/titulo';
import { Link } from 'react-router-dom';


import Arroz from '/Users/BIN/Desktop/VINICIOS/TCC/src/assets/Arroz.png';
import Pizza from '/Users/BIN/Desktop/VINICIOS/TCC/src/assets/pizza.svg';
import Agua from '/Users/BIN/Desktop/VINICIOS/TCC/src/assets/agua.svg';
import CardItem from '../CardItem/cardItem';
import Voltar from '/Users/BIN/Desktop/VINICIOS/TCC/src/assets/voltar-icon.svg';

const Alimentos = () => {

  return (
    <>
      <Link to="/"><img className="voltarbtn" src={Voltar} alt="Voltar" style={{ marginBottom: '-2rem'}}/></Link>
      
      <div className='containerHome'>
          <Titulo titulo="Alimentos"></Titulo>
          <CardItem image={Arroz} alt="Arroz" ></CardItem >
          <CardItem image={Pizza} alt="Pizza"></CardItem>
          <CardItem image={Agua} alt="Água"></CardItem>
      </div>
    </>
  );
};

export default Alimentos;
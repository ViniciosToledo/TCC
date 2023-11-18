import React from 'react';
import Titulo from '../Titulo/titulo';


import Feliz from '/Users/BIN/Desktop/VINICIOS/TCC/src/assets/Feliz.png';
import Triste from '/Users/BIN/Desktop/VINICIOS/TCC/src/assets/Triste.png';
import Sono from '/Users/BIN/Desktop/VINICIOS/TCC/src/assets/Sono.png';
import CardItem from '../CardItem/cardItem';
import Voltar from '/Users/BIN/Desktop/VINICIOS/TCC/src/assets/voltar-icon.svg';

const Sentimentos = () => {
  return (
    <>
        <img className="voltarbtn" src={Voltar} alt="Voltar" style={{ marginBottom: '-2rem'}}/>
        <div className='containerHome'>
            <Titulo titulo="Sentimentos"></Titulo>
            <CardItem image={Feliz} alt="Feliz"></CardItem>
            <CardItem image={Triste} alt="Triste"></CardItem>
            <CardItem image={Sono} alt="Sono"></CardItem>
        </div>
    </>
  );
};

export default Sentimentos;
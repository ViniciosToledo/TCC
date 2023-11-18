import React from 'react';
import Titulo from '../Titulo/titulo';


import Ajuda from '/Users/BIN/Desktop/VINICIOS/TCC/src/assets/Ajuda.png';
import Banho from '/Users/BIN/Desktop/VINICIOS/TCC/src/assets/Banho.png';
import Fome from '/Users/BIN/Desktop/VINICIOS/TCC/src/assets/Fome.png';
import CardItem from '../CardItem/cardItem';
import Voltar from '/Users/BIN/Desktop/VINICIOS/TCC/src/assets/voltar-icon.svg';

const Necessidades = () => {
  return (
    <>
        <img className="voltarbtn" src={Voltar} alt="Voltar" style={{ marginBottom: '-2rem'}}/>
        <div className='containerHome'>
            <Titulo titulo="Necessidades"></Titulo>
            <CardItem image={Ajuda} alt="Ajuda"></CardItem>
            <CardItem image={Banho} alt="Banho"></CardItem>
            <CardItem image={Fome} alt="Fome"></CardItem>
        </div>
    </>
  );
};

export default Necessidades;
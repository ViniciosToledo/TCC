import React from 'react';
import './home.css'
import Titulo from '../Titulo/titulo';
import CardCategoria from '../CardCategoria/cardCategoria';

import CategoriaComida from '/Users/BIN/Desktop/VINICIOS/TCC/src/assets/CategoriaComida.svg';
import CategoriaNecessidades from '/Users/BIN/Desktop/VINICIOS/TCC/src/assets/CategoriaNecessidades.svg';
import CategoriaSentimentos from '/Users/BIN/Desktop/VINICIOS/TCC/src/assets/CategoriaSentimentos.svg';

const Home = () => {
  return (
    <div className='containerHome'>
        <Titulo titulo="Categorias"></Titulo>
        <CardCategoria className="card" image={CategoriaComida} alt={"Alimentos"}></CardCategoria>
        <CardCategoria className="card" image={CategoriaSentimentos} alt={"Sentimentos"}></CardCategoria>
        <CardCategoria className="card" image={CategoriaNecessidades} alt={"Necessidades"}></CardCategoria>
    </div>
  );
};

export default Home;
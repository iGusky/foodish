import React, { useEffect, useState } from 'react'
import './Resultados.css';
import { getImage } from '../config/axios';

interface ResultadosProps{
  categoria: String
}

function Resultados(props: ResultadosProps) {
  
  const {categoria} = props;
  const [image, setImage] = useState('');

  const buscarImagen = async ()=>{
    const res = await getImage(categoria)
    console.log(categoria)
    setImage( res.image );
  }

  useEffect(() => {
    buscarImagen()
  }, [categoria])


  return (
    <div className="resultados">
      <img
        src={image}
        alt="Food" 
        className="u-full-width"
      />
      <button 
        className="button-primary u-full-width"
        onClick={()=>buscarImagen()}
        >Obtener Otra
      </button>
    </div>
  )
}

export default Resultados

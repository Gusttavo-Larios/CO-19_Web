import React from 'react';
import './styles.css'

import warning from '../../assets/image-warning.svg'

export default function CardWarning(){
  return(
    <div className="containerCardWarning">
      <img src={warning} alt="warning" className="warning"/>

      <p className="alert">Insira um valor válido!</p>
      <p className="alert help">Clique em na tela para fechar o aviso</p>
    </div>
  )
}
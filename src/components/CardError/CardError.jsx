import React from 'react';
import './styles.css'

import error from '../../assets/image-error.svg'

export default function CardError(){
  return(
    <div className="containerCardError">
      <img src={error} alt="error" className="error"/>

      <p className="alert">Ops! Tente mais tarde</p>
      <p className="alert help">Clique em na tela para fechar o aviso</p>
    </div>
  )
}
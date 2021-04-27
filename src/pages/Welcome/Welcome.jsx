import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css'

import logo from '../../assets/header.svg'
import welcome from '../../assets/image-welcome.svg'


export default function Welcome(){
  const history = useHistory();

  function next(){
    history.push('/Home');
  }

  return(
    <div className="container">
      <img className="logo" src={logo} alt="Logo"/>
      <img className="welcome" src={welcome} alt="Logo"/>

      <p className="welcomeText">Seja bem vindo(a)!</p>

      <button className="button" type="button" onClick={next}>
        Próximo
      </button>
    </div>
  )
}

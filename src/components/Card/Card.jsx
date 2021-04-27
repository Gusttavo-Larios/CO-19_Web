import React from 'react';
import './styles.css'

import people from '../../assets/people.svg'
import suspects from '../../assets/suspects.svg'
import skull from '../../assets/deaths.svg'

import Informations from '../Informations/Informations'

export default function Card({uf}){
  return(
    <div className="containerCard">
      <h1 className="state">{uf.state}</h1>

      <section className="content">
        
      <Informations image={people} text="Infectados" value={uf.cases}/>
      <Informations image={suspects} text="Suspeitos" value={uf.suspects}/>
      <Informations image={skull} text="Mortes" value={uf.deaths}/>

      </section>
    </div>
  )
}
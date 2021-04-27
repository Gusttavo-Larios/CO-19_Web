import React, { useState } from 'react';
import './styles.css'

import logo from '../../assets/header.svg'
import search from '../../assets/search.svg'

import Card from '../../components/Card/Card'
import CardError from '../../components/CardError/CardError'
import CardWarning from '../../components/CardWarning/CardWarning'

import api from '../../services/api'

export default function Home(){
  const [isVisibleWarning, setIsVisibleWarning ] = useState(false)
  const [isVisibleError, setIsVisibleError ] = useState(false)
  const [isVisibleCard, setIsVisibleCard ] = useState(false)

  const [uf, setUf] = useState('')
  const [data, setData] = useState(null)

  
  async function searchUf(){
    try {
      const response = await api.get(`/${uf}`)

      if(response.status !== 200){
        setIsVisibleError(true)
        setIsVisibleCard(false)
        return
      }

      if(response.data.uid === undefined){
        setIsVisibleWarning(true)
        setIsVisibleCard(false)
        return
      }

      setUf('')
      setData(response.data)
      setIsVisibleCard(true)

    } catch (error) {
      setIsVisibleError(true)
    }
  }

  function close(){
    setIsVisibleError(false)
    setIsVisibleWarning(false)
  }

  return(
    <div className="containerHome">
      <img className="logoHome" src={logo} alt="Logo"/>

      <div className="boxSearch">
        <input type="text" placeholder="Ex: Sp" className="inputHome" onChange={(e) => setUf(e.target.value)}/>

        <button onClick={searchUf} type="button" className="buttonSearch">
          <img className="searchHome" src={search} alt="Logo"/>
        </button>
      </div>

      {isVisibleError && (
        <>
          <div onClick={close} className="overlay">
            <CardError/>
          </div>
          
        </>
      )}

      {isVisibleWarning && (
        <>
          <div onClick={close} className="overlay">
            <CardWarning/>
          </div>
        </>
      )}

      {isVisibleCard && 
        <Card uf={data}/>
      }
      

    </div>
  )
}

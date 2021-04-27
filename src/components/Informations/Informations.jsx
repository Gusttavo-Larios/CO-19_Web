import React from 'react';
import './styles.css'

export default function informations({image, text, value}){
  function numberFormat(num) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '1,')
  }
  return(
        <div className="data">
          <img src={image} alt="" className="image"/>
          <p className="information">{text}:</p>
          <p className="informationData">{numberFormat(value)}</p>
        </div>
  )
}
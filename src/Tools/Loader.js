import React from 'react'
import './Loader.css'
import LoaderImg from '../Asset/logo_mini.svg'

const Loader = () => {

    
  return (
    <div className="loader-container">
    <div className="loader">
     <img src={LoaderImg} alt="Loader-img" className="custom-image" />
    </div>
  </div>
  )
}

export default Loader

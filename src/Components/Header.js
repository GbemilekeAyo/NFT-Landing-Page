import React from 'react'
import './header.css'



const Header = ({heading, section}) => {
  return (
    <div className='header'>
   <h1><small className='line' ></small>{heading}</h1>
   <h2>{section}</h2>
    </div>
  )
}

export default Header

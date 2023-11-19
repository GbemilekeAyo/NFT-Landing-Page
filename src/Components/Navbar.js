import { useState } from 'react'
import './navbar.css'
import Brand from '../Asset/logo_white.svg'
import { HashLink as Link } from 'react-router-hash-link'
import {BiWallet} from 'react-icons/bi'



  const Navbar = () => {  
  const [active , setActive] = useState('nav_menu');
  const [toggleIcon, setToggleIcon] = useState('nav_toggler');

  

  //NAVBAR TOGGLE FUNCTION
     const navtoggle = () => {
      active === 'nav_menu' ? setActive('nav_menu nav_active')  
      :setActive("nav_menu");

      //Toggler Icon
        toggleIcon === 'nav_toggler' 
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler")
     }

  return (
    <nav>
      <div className='nav-container'>
        <img className='brand' src={Brand} alt="BrandLogo" />
        <ul className={active}>
           <Link to="#home" smooth ><li className='nav_item'>Home</li></Link>
           <Link to="#about" smooth><li  className='nav_item'>About</li></Link>
           <Link to="#roadmap" smooth><li  className='nav_item'>Roadmap</li></Link>
           <Link to="#team" smooth><li  className='nav_item'>Team</li></Link>
           <Link to="#faq" smooth><li  className='nav_item'>FAQ</li></Link>
           <Link to="#contact" smooth><li  className='nav_item'>Contact</li></Link>
           <Link to="#pages" smooth><li  className='nav_item'>Pages</li></Link>
        </ul>
        <div className="extra flex items-center">
        <button className='text-[#Fff] bg-[#0000ff] flex items-center gap-2 rounded-[5px] p-[10px]'><BiWallet/><h1>Connect</h1></button>
        </div>
        <div onClick={navtoggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
  
      </div>
    </nav>
  )
}

export default Navbar

import React from 'react'
import { useEffect } from 'react';
import './footer.css'
import FooterImg from '../Asset/logo_footer_white.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PeopleIcon from '@mui/icons-material/People';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AOS from 'aos';



const Footer = () => {

//AOS ANIMATION
useEffect(() => {
  AOS.init({
    duration: 2000, // Animation duration in milliseconds
    easing: 'ease-in-out', // Easing for the animation
  });
}, []); // Empty dependency array ensures the effect runs only once after the initial render




  return (
    <div data-aos="fade-up" className='footer'>
        <div className="footer-container">
      <div className="footer-first">
        <h1>Join Our Community For First Access</h1>
        <p>Lorem ipsum dolor sit, amet consectetur 
        adipisicing elit. Culpa repellat temporibus 
        qui, tempore quae maxime fugit asperiores 
        magni reprehenderit voluptatibus beatae 
        excepturi itaque labore sit!</p>

        <div className="footer-btn">
            <button className='text-[white]' ><PeopleIcon/>Join Community</button>
            <button className='bg-[white] text-[#06182c]'><ListAltIcon/> Join The Waitlist</button>
        </div>
      </div>

      <div className="footer-second">
      <img src={FooterImg} alt="foote-logo" />
      <span className='footer-socials'>
      <FacebookIcon/>
      <WhatsAppIcon/>
      <YouTubeIcon/>
      <InstagramIcon/>
      </span>
      <p>Copyright © 2023. All Rights Reserved by Gbemileke Ayodele</p>
      </div>
    </div>
    </div>
  )
}

export default Footer


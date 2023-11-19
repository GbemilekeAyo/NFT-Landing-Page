import React from 'react'
import { useEffect } from 'react';
import './mainheader.css'
import MainHeaderpic1 from '../Asset/hero_img_sm.png'
import MainHeaderpic2 from '../Asset/dragon.svg'
import 'aos/dist/aos.css';
import AOS from 'aos';








const MainHeader = () => {


  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing for the animation
    });
  }, []); // Empty dependency array ensures the effect runs only once after the initial render



  return (
    <div className="mainheader">
        <div className="mainheader-flex">
         <div data-aos="fade-right" className="mainheader-first">
            <h1 className="text-[#fff]">0/725 Minted</h1>
            <h2 className="mt-[2rem] mb-[2rem] text-[#fff]" >Discover & Collect NFT Artwork</h2>
            <span>
                <button className="btn" >Mint Now</button>
                <button className="btn1 ml-[1.5rem]">Join The Waitlist</button>
            </span>
            <p className="text-[#fff]">Max 3 NFTs Per Wallet. Price <small className="text-[#0052ff] text-[1.2rem]" >0.02</small> ETH Mint is Live Until <small className="text-[#0052ff] text-[1.2rem]" >22 july</small></p>
         </div>

         <div className="mainheader-second">
            <img className='pic1' src={MainHeaderpic1} alt="pic1" />
            <img  src={MainHeaderpic2} alt="pic2" />
         </div>
        </div>
      </div>
  )
}

export default MainHeader

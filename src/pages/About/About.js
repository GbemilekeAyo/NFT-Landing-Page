import React from 'react'
import { useEffect } from 'react';
import './about.css'
import AboutImage from '../../Asset/about_img.svg'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { about } from '../../Data/Data';
import { Simplestep } from '../../Data/Data';
import MySwiper from '../../Tools/MySwiper';
import Counter from '../../Tools/Counter';
import Header from '../../Components/Header';




const About = () => {
//AOS ANIMATION
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing for the animation
    });
  }, []); // Empty dependency array ensures the effect runs only once after the initial render




  return (
  
    <div className="about"  id='about'>
    <div className="about-flex">
         <div data-aos="fade-right"  className="about-first">
             <Header heading="Our Story" section="About Us"  ></Header>
            <p className="">As of January 2012, there were more than 21,000
             ERC20 token contracts. We Built this Template because Ethereum
             ECO system is the most popular Platform. Among the most successful
             ERC20 token sales are EOS, Bancor, Qash and Bankex raising over 
             $70 Million each.</p>

             <p className="mt-5 mb-5">As of January 2012, there were more than 21,000
             ERC20 token contracts. We Built this Template because Ethereum
             ECO system is the most popular Platform. Among the most successful
             ERC20 token sales are EOS, Bancor, Qash and Bankex raising over 
             $70 Million each.</p>
             
            <span>
                <button className="btn" >Mint Now</button>
                <button className="btn1 ml-[1.5rem]">Join The Waitlist</button>
            </span>
          
         </div>

         <div data-aos="fade-up" className="about-second">
           <img src={AboutImage} alt="AboutImage" />
         </div>
        </div>

     {/* PRODUCT SECTION*/}
    <div className="about_product">
     <div className="about_product_grid">
       {
          about.map(({id, number , title , info}) =>{
            return(
              <div  data-aos="fade-up"
               data-aos-duration="1000"
               className='about_product_row' key={id} >
                 <h1>0{number}.</h1>
                 <h2>{title}</h2>
                 <p>{info}</p>
              </div>  
            )
          })
        }
     </div>
    </div>

{/* IMPORTED SWIPER COMPONENT */}
   <div>
    <MySwiper/>
   </div>
  

  {/* COUNTER SECTION WITH IMPORTED COUNTER COMPONENT */ }
   <div  data-aos="fade-up"
        data-aos-duration="1000" className='counter'>
    <div className="counter-grid">
    <div><h1> <Counter targetCount={365} /></h1>
    <p>Total Items</p>
    </div>
     <div><span> <h1><Counter targetCount={1125} /></h1>k</span> 
     <p>Total Owner</p>
     </div>
    <div><span><h1><Counter targetCount={172} /></h1></span> 
    <p>Floor Price</p>
    </div>
    <div><span className=''><h1><Counter targetCount={422} /></h1>K</span> 
    <p>Volume Traded</p>
    </div>
   </div>
   </div>


  {/*SIMPLE STEP SECTION*/}

  <div className='simple-step'>
  <Header heading="Simple Steps" section="Minting Tecqniques"  ></Header>
    <div className="simple-step-grid">
       {
        Simplestep.map(({id,  title , icon}) =>{
          return(
            <div  data-aos="fade-up"
             data-aos-duration="1000"
             className='simple_step_row' key={id} >
               <h2>{title}.</h2>
               <p>{icon}</p>
            </div>
          )
        })
       }
     </div>
     </div>

  </div>    
  )
}

export default About

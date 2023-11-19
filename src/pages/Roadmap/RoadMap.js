import React from 'react'
import { useEffect } from 'react';
import Header from '../../Components/Header';
import { roadmap } from '../../Data/Data';
import './roadmap.css'
import AOS from 'aos';


const RoadMap = () => {
 //AOS ANIMATION
 useEffect(() => {
  AOS.init({
    duration: 2000, // Animation duration in milliseconds
    easing: 'ease-in-out', // Easing for the animation
  });
}, []); // Empty dependency array ensures the effect runs only once after the initial render


  return (
    <div className='roadmap' id='roadmap'>
        <Header heading="Our Goals" section="Roadmap Make Unique"></Header>
      <section className='timeline'>
        <div className='first'>
      <div>
        <h1>1</h1>
      </div>

      <div>
        <h1>2</h1>
      </div>

      <div>
        <h1>3</h1>
      </div>

      <div>
        <h1>4</h1>
      </div>
      </div>
      <div className="roadmap-grid">
      {
        roadmap.map(({id , heading, title , description})=>{
            return(
                <div data-aos="fade-right"  className="roadmap-row" key={id}>
                   <h1>{heading}</h1>
                   <h2>{title}</h2>
                   <p>{description}</p>
                </div>
            )
        })
      }
     
     </div>
     </section>
    </div>
  )
}

export default RoadMap

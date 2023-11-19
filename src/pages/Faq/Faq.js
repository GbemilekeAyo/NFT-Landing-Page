import React from 'react'
import Header from '../../Components/Header'
import FAQ from '../../Components/FAQ'
import { faqs } from '../../Data/Data'
import { useEffect } from 'react'
import './faq.css'
import AOS from 'aos';

const Faq = () => {
   
   //AOS ANIMATION
 useEffect(() => {
  AOS.init({
    duration: 2000, // Animation duration in milliseconds
    easing: 'ease-in-out', // Easing for the animation
  });
}, []); // Empty dependency array ensures the effect runs only once after the initial render




  return (
    <div data-aos="fade-up" className='faqs' id='faq'>
      <Header heading="faqs" section="Still have question"></Header>
      <div className="faqs_container">
            <div className="faqs_row">
                {
                    faqs.map(({id , question , answer}) => {
                     return <FAQ key={id} question={question} answer={answer}/>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Faq

import React from 'react'
import { useEffect } from 'react'
import './team.css'
import Header from '../../Components/Header'
import { team } from '../../Data/Data'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AOS from 'aos';

const Team = () => {

  //AOS ANIMATION
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing for the animation
    });
  }, []); // Empty dependency array ensures the effect runs only once after the initial render


  return (
    <div className='team' id='team'>
      <Header heading="Team" section="Meet Our Team"></Header>
      <div className="team-grid">
        {
          team.map(({id , image , name , job}) =>{
            return(
            <div  data-aos="fade-up" className='team-row' key={id}>
              <img src={image} alt={name} />
              <div className='team-text'>
              <h1>{name}</h1>
              <p>{job}</p>
              </div>
              <div className="team-socials">
                <TwitterIcon/>
                <FacebookIcon/>
                <LinkedInIcon/>
              </div>
            </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Team

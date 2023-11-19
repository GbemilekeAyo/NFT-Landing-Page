import React from 'react';
import './home.css';
import Navbar from '../../Components/Navbar';
import MainHeader from '../../Components/MainHeader';
import About from '../About/About';
import Team from '../Team/Team';
import RoadMap from '../Roadmap/RoadMap';
import Faq from '../Faq/Faq';
import Contact from '../Contact/Contact';
import Footer from '../../Components/Footer';






const Home = () => {

  return (
       
      <div id='home'>
        
      <Navbar/>
      <MainHeader/>
      <About/>
      <Team/>
      <RoadMap/>
      <Faq/>
      <Contact/>
      <Footer/>
       </div>
      
  )
}

export default Home

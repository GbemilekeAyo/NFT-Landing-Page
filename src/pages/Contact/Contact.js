import React from 'react'
import Header from '../../Components/Header'
import './contact.css'
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';


const Contact = () => {
  return (
    <div id='contact' className='contact '>
      <Header heading="Contact" section="Get In Touch"></Header>
      <div className="contact-container">
        <div className="contact-form">
          <form>
            <div className='form-flex'>
             <span>
             <label className='left-[5%]'>FullName</label>
             <br /> 
             <input type="text" name="name"/>
             </span>
           
           <span>
           <label className="small" >Email</label>
            <br />
            <input type="email" name="email"/>
            </span>  
            </div>


            <div className='mt-[2rem] flex2'>
            <label className='ml-[2rem]'>Subject</label>
            <input type="text" name="subject"/>
              
            <label className='top-[13rem]'>Message</label>
            <textarea name="" id="" cols="30" rows="10"> </textarea>
            <br />
            </div>
            <button className='btn'>Submit Now</button>
          </form>
        </div>
        <div className="contact-extra">
          <h1>Contact Info</h1>
          <div>
            <PhoneIcon/>
            <span>
              <h2>Call anytime</h2>
              <p>Mobile: +99 098 234 123</p>
              <p>Hotline: 16234</p>
            </span>
          </div>


          <div>
            <MailIcon/>
            <span>
              <h2>Email Us </h2>
              <p>Support: support@gmail.com</p>
              <p>Info: hey@gmail.com</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

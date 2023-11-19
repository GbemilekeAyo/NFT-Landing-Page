import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';
import 'swiper/css';
import './Myswiper.css'
import 'swiper/css/pagination';
import Product1 from '../Asset/product1.svg'
import Product2 from '../Asset/product2.svg'
import Product3 from '../Asset/product3.svg'
import 'aos/dist/aos.css';
import AOS from 'aos';





const MySwiper = () => {
//AOS ANIMATION
useEffect(() => {
  AOS.init({
    duration: 2000, // Animation duration in milliseconds
    easing: 'ease-in-out', // Easing for the animation
  });
}, []); // Empty dependency array ensures the effect runs only once after the initial render


  return (
  
    <div className='myswiper'>
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
         
        }}
        
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          }
        }}
   
        autoplay={{
          delay: 3000, // Set the autoplay delay in milliseconds (3 seconds in this case)
          disableOnInteraction: false, // Autoplay will not be disabled when the user interacts with the Swiper
       
        }}
       
        className="mySwiper"
        data-aos="fade-up"
       data-aos-duration="3000"
      >
        <SwiperSlide><img src={Product1} alt="product1" /></SwiperSlide>
        <SwiperSlide><img src={Product2} alt="product2" /></SwiperSlide>
        <SwiperSlide><img src={Product3} alt="product3" /></SwiperSlide>
        <SwiperSlide><img src={Product1} alt="product4" /></SwiperSlide>
        <SwiperSlide><img src={Product2} alt="product5" /></SwiperSlide>
        <SwiperSlide><img src={Product3} alt="product6" /></SwiperSlide>
        <SwiperSlide><img src={Product1} alt="product7" /></SwiperSlide>
        <SwiperSlide><img src={Product2} alt="product8" /></SwiperSlide>
        <SwiperSlide><img src={Product3} alt="product9" /></SwiperSlide>
      </Swiper>
    </>
    </div>
    
  );
}

export default MySwiper

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image from '../portfolio-images/ay.png'



const Header = () => {

   useEffect(() => {
    AOS.init();
   /*  AOS.refresh(); */
  }, []);


  return (
    <div className="header" id='home'>
        <div className="container header__container">
            <div className="header__left" data-aos="fade-up" data-aos-anchor-placement="top-center">
                <h2 data-aos="fade-up" data-aos-anchor-placement="top-center">“Hi, I'm Adeko – Frontend Developer.”</h2>
                <p  data-aos="fade-left" >I build scalable web apps that solve real-world problems</p>

                    <a href="mailto:adekoelijah@gmail.com" className='btn primarys' >Get In Touch</a>
            </div> 
            <div className="header__right"  data-aos="fade-left">
                <div className="circle"></div>
                <div className="hearder__image">
                    <img src={image} alt="header person" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
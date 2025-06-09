// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";


import image from '../portfolio-images/avatar1.jpg'
import image1 from '../portfolio-images/avatar2.jpg'
import image2 from '../portfolio-images/avatar3.jpg'
import image3 from '../portfolio-images/avatar4.jpg'
import image4 from '../portfolio-images/avatar5.jpg'
import image5 from '../portfolio-images/avatar3.jpg'


const Testimonial = () => { 
  return (
    <section id='testimonial' className="testimonial">
        <div className="container testimonial__container">
            <h2>Testimonial</h2>
            <div className="about__me-dot"></div>
            

            <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='testimonial__details'>
        <div className="testimonial__image">
            <img src={image} alt="" />
        </div>
        <div className="testimonial__info">
            <p><BiSolidQuoteAltLeft />Adeko’s expertise in React.js transformed our outdated website into a modern, lightning-fast platform. His attention to detail and clean code made the development seamless and the user experience flawless.<BiSolidQuoteAltRight /></p>
            <h4>— Client, E-commerce Startup</h4>
        </div>

      </SwiperSlide>


      <SwiperSlide className='testimonial__details'>
        <div className="testimonial__image">
            <img src={image1} alt="" />
        </div>
        <div className="testimonial__info">
            <p><BiSolidQuoteAltLeft />Thanks to Adeko's mastery of HTML5 and CSS3, our landing page looks stunning across all devices. He delivered pixel-perfect designs that truly reflect our brand.<BiSolidQuoteAltRight /></p>
            <h4>— Marketing Manager, Tech Firm</h4>

        </div>

      </SwiperSlide>


      <SwiperSlide className='testimonial__details'>
        <div className="testimonial__image">
            <img src={image2} alt="" />
        </div>
        <div className="testimonial__info">
            <p><BiSolidQuoteAltLeft />Adeko’s knowledge of JavaScript and React helped us build a dynamic dashboard that’s both intuitive and scalable. His problem-solving skills and communication made the whole process smooth.<BiSolidQuoteAltRight /></p>
            <h4>— Product Owner, SaaS Company</h4>
        </div>

      </SwiperSlide>


      <SwiperSlide className='testimonial__details'>
        <div className="testimonial__image">
            <img src={image3} alt="" />
        </div>
        <div className="testimonial__info">
            <p><BiSolidQuoteAltLeft />I was impressed by how Adeko used CSS Flexbox and Grid to create responsive layouts that adapt beautifully to any screen size. His designs boosted our mobile traffic significantly.<BiSolidQuoteAltRight /></p>
            <h4>— Founder, Lifestyle Blog</h4>
        </div>

      </SwiperSlide>


      <SwiperSlide className='testimonial__details'>
        <div className="testimonial__image">
            <img src={image4} alt="" />
        </div>
        <div className="testimonial__info">
            <p><BiSolidQuoteAltLeft />Adeko’s proficiency with React Router and component-based architecture accelerated our project timeline without sacrificing quality. He’s a true professional who understands both design and code.<BiSolidQuoteAltRight /></p>
            <h4>— CTO, Fintech Startup</h4>
        </div>

      </SwiperSlide>


      <SwiperSlide className='testimonial__details'>
        <div className="testimonial__image">
            <img src={image5} alt="" />
        </div>
        <div className="testimonial__info">
            <p><BiSolidQuoteAltLeft />With Adeko’s deep understanding of front-end development, including Sass and vanilla JavaScript, he crafted an engaging portfolio website that’s both fast and easy to maintain.<BiSolidQuoteAltRight /></p>
            <h4>— Freelancer Client</h4>
        </div>

      </SwiperSlide>


      <SwiperSlide className='testimonial__details'>
        <div className="testimonial__image">
            <img src={image} alt="" />
        </div>
        <div className="testimonial__info">
            <p><BiSolidQuoteAltLeft />Adeko is a creative problem solver. Using React Hooks and clean component design, he built interactive features that made our app stand out. I highly recommend him for any web project<BiSolidQuoteAltRight /></p>
            <h4>— Project Manager, Education Platform</h4>
        </div>

      </SwiperSlide>
    
    </Swiper>
           

        </div>
    </section>
  )
}

export default Testimonial
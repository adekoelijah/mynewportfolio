import React from 'react'
import image from '../portfolio-images/ay.png'

const Header = () => {
  return (
    <div className="header" id='home'>
        <div className="container header__container">
            <div className="header__left">
                <h2>“Hi, I'm Adeko – Frontend Developer.”</h2>
                <p>I build scalable web apps that solve real-world problems</p>

                    <a href="mailto:adekoelijah@gmail.com" className='btn primarys'>Get In Touch</a>
            </div> 
            <div className="header__right">
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
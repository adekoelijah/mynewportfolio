
import { BiLogoGmail } from "react-icons/bi";
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id='contact' className="contact">
        <div className="container contact__container">
            <h2>Contact</h2>
            <div className="about__me-dot"></div>
            <div className="contact__details">
            <div className="contact__left">
                <article >
                    <div className="info__section">
                        <a href="mailto:adekoelijah@gmail.com"><BiLogoGmail />
                        <p>Gmail</p></a>
                    </div>
                   
                </article>

                <article >
                    <div className="info__section">
                        <a  href="https://web.facebook.com/james.oladekan" target="_blank" rel="noopener noreferrer"><ImFacebook />
                        <p>Facebook</p> </a>
                    </div>
                </article>

                <article >
                    <div className="info__section">
                        <a href="https://www.linkedin.com/in/adeko-ayomide/" target="blank" rel="noopener noreferrer"><FaLinkedinIn />
                        <p>Linkedin</p></a>
                    </div>
                </article>

                <article >
                    <div className="info__section">
                        <a  href="https://wa.me/2347088294012" target="_blank" rel="noopener noreferrer"><BsWhatsapp />
                        <p>Whatsapp</p></a>
                    </div>
                </article>







            </div>
            <div className="contact__right">
                <h2>Lets Talk</h2>
                <p>I'm currently open to new opportunities and collaborations. Let's build something awesome together!</p>

                <form action="https://formspree.io/f/xzzgdrde" method="POST">
                    <input type="text" name='text' placeholder='Your Name' />
                    <input type="email" name="email"  required placeholder='Your Email'/>

                    <textarea name="message"  placeholder='Your Message'></textarea>

                    <button className='btn primary contact__btn' type="submit">Send Me A Message</button>
                </form> 
            </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
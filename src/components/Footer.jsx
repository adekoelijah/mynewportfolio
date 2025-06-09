
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <h5>Adeko A</h5>
                <p>Building tools  that makes life easier</p>
            </article>

            <article className='footer__nav'>
                <a href="/">Home</a>
                <a href="about">About</a>
                <a href="project">Project</a>
                <a href="testimonial">Testimonial</a>
                <a href="contact">contact</a>
            </article>

            <article className='footer__image'>
                <a href="https://wa.me/2347088294012" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                <a href="https://github.com/adekoelijah?tab=repositories" target="blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/adeko-ayomide/" target="blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </article>
        </div>
        <div className="dots"></div>
        <div className='copywright'> 
            <small>© 2025 Adeko Ayomide . All right reserved . • Built with  ReactJs</small>
        </div>
    </footer>
  )
}

export default Footer
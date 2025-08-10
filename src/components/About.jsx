import image from '../portfolio-images/ay.png'



const About = () => {
  return (
    <section className="about" id="about">
        <div className="container about__container">
            <h2>About Me</h2>
            <div className="about__me-dot"></div>

            <div className="about__details">
                <div className="about__left">
                    <p  data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="500">Hey, I’m <span>Adeko</span>  a passionate and results-driven <span>Frontend Web Developer</span> with over 
                        5+ years of experience building fast, scalable, and user-focused applications
                    </p>
                    <p  data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000">
                         My journey started in university, where I built my first website using raw HTML/CSS. 
                         Today, I architect and develop full-scale solutions using technologies like
                    </p>
                    <h4  data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1500">Reactjs,Nextjs, Node.js, HTML, CSS, Python, Javascript and Django </h4>

                    <p  data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="2000"> 💡 I enjoy solving real-world problems with technology</p>
                    <p  data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="2000">🚀 I aim to create fast, accessible, and maintainable software</p>
                    <a  href="/public/adeko.pdf" target="_blank" rel="noopener noreferrer" download className='btn primarys'  data-aos="fade-down">Download Resume</a>
                </div>
                <div className="about__right" >
                    <img src={image} alt="about images" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
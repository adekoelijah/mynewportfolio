import image from '../portfolio-images/avt6.png'
import image1 from '../portfolio-images/port10.png'
import image2 from '../portfolio-images/port11.png'
import image3 from '../portfolio-images/education.png'
import image4 from '../portfolio-images/port9.png'
import image5 from '../portfolio-images/potfolio1.png'
import image6 from '../portfolio-images/hospital.png'

import image7 from '../portfolio-images/revid.png'


const Project = () => {
  return (
    <section className="project" id='project'>
        <div className="container project__container">
            <h2>Projects</h2>
            <div className="about__me-dot"></div>

            <div className="project__wrapper">


                <div className="card">
                    <div className="detail__image">
                        <img src={image} alt="blog" />
                    </div>
                    <h3>Blog</h3>
                    <p>I built this blog website using only HTML, CSS and Javascript. I focused on creating a clean, readable layout with a responsive design that works well across devices. </p>
                    <p> One challenge was organizing the content for both structure and style without using JavaScript. I solved this by using semantic HTML tags and CSS flexbox and media queries to ensure consistent layout and styling.</p>
                    <h4>Tech Stack: HTML, CSS,Node.js Javascript </h4>
                    <div className="project__button">
                        <a href="https://github.com/adekoelijah/school_blog" target="blank" rel="noopener noreferrer" className='btn'>Github</a>
                        <a href="https://adekoelijah.github.io/school_blog/" target="blank" rel="noopener noreferrer" className='btn primary'>Live Demo</a>
                    </div>
                </div>




                <div className="card">
                    <div className="detail__image">
                        <img src={image1} alt="blog" />
                    </div>
                    <h3>E-commerce landing page</h3>
                    <p>I built this responsive e-commerce landing page using React.js, focusing on speed, clean UI, and user engagement. </p>
                    <p>I used React Router for navigation, CSS Modules for scoped styling, and Framer Motion to add smooth animations. One key challenge was managing layout responsiveness across devices, which I solved using flexbox, grid, and custom media queries. The result is a modern, conversion-focused landing page optimized for performance and user experience</p>
                    <h4>Tech Stack: ReactJs, CSS,React Router ,Hooks  </h4>
                    <div className="project__button">
                        <a href="https://github.com/adekoelijah/garden-restaurant" target="blank" rel="noopener noreferrer" className='btn'>Github</a>
                        <a href="https://adekoelijah.github.io/garden-restaurant/" target="blank" rel="noopener noreferrer" className='btn primary'>Live Demo</a>
                    </div>
                </div>



                <div className="card">
                    <div className="detail__image">
                        <img src={image2} alt="blog" />
                    </div>
                    <h3>💼 Personal Portfolio</h3>
                    <p> I developed this portfolio using HTML, CSS, and JavaScript, with a focus on clean design, smooth user interaction, and responsive layout. </p>
                    <p>Every section—from the landing animation to the project showcase—was crafted from scratch using JavaScript for interactivity and CSS transitions for seamless animations. A key challenge was ensuring performance and mobile responsiveness, which I achieved through optimized media queries and lightweight scriptin</p>
                    <h4>Tech Stack: HTML, CSS,Node.js, Javascript </h4>
                    <div className="project__button">
                        <a href="https://github.com/adekoelijah/myportfolio" target="blank" rel="noopener noreferrer" className='btn'>Github</a>
                        <a href="https://adekoelijah.github.io/myportfolio/" target="blank" rel="noopener noreferrer" className='btn primary'>Live Demo</a>
                    </div>
                </div>


                <div className="card">
                    <div className="detail__image">
                        <img src={image3} alt="blog" />
                    </div>
                    <h3>🎓 Education Website</h3>
                    <p>Built with HTML and CSS, this site features a clear, accessible layout designed for easy learning navigation. </p>
                    <p>A key challenge was creating a responsive design without JavaScript, solved by using semantic HTML and flexible CSS Grid and media queries to ensure smooth viewing on all devices.</p>
                    <h4>Tech Stack: HTML, CSS,Node.js Javascript </h4>
                    <div className="project__button">
                        <a href="https://github.com/adekoelijah/edu" target="blank" rel="noopener noreferrer" className='btn'>Github</a>
                        <a href="https://adekoelijah.github.io/edu/" target="blank" rel="noopener noreferrer" className='btn primary'>Live Demo</a>
                    </div>
                </div>



                <div className="card">
                    <div className="detail__image">
                        <img src={image4} alt="blog" />
                    </div>
                    <h3>🚀 React Portfolio</h3>
                    <p>A sleek, responsive portfolio built with React.js, showcasing my projects through clean design, smooth navigation, and reusable components. </p>
                    <p>Optimized for performance and mobile-first experience.</p>
                    <h4>Tech Stack: Reactjs, CSS,Node.js, Formspree, React Icons, Swiperjs  </h4>
                    <div className="project__button">
                        <a href="https://github.com/adekoelijah/mynewportfolio" target="blank" rel="noopener noreferrer" className='btn'>Github</a>
                        <a href=" https://adekoelijah.github.io/mynewportfolio/" target="blank" rel="noopener noreferrer"  className='btn primary'>Live Demo</a>
                    </div>
                </div>


                <div className="card">
                    <div className="detail__image">
                        <img src={image5} alt="blog" />
                    </div>
                    <h3>💪 Fitness Website</h3>
                    <p>Built with React.js, this responsive fitness site features clean navigation, animated sections using Framer Motion, and modular styling with CSS Modules.  </p>
                    <p>I used React Router for page transitions and optimized the layout with Flexbox and Grid. The project highlights a structured, reusable component design focused on performance and user experience.</p>
                    <h4>Tech Stack: Reactjs, CSS,Node.js </h4>
                    <div className="project__button">
                       <a href="https://github.com/adekoelijah/react-trainings" target="blank" rel="noopener noreferrer"  className='btn'>Github</a>
                        <a href="https://adekoelijah.github.io/react-trainings/" target="blank" rel="noopener noreferrer"  className='btn primary'>Live Demo</a>
                    </div>
                </div>


                <div className="card">
                    <div className="detail__image">
                        <img src={image6} alt="blog" />
                    </div>
                    <h3>🏥 Hospital Website</h3>
                    <p>Developed with HTML and CSS, this hospital website focuses on clear information hierarchy and user-friendly navigation.  </p>
                    <p>A major challenge was ensuring accessibility and responsiveness across devices without any flukes. I addressed this by leveraging semantic HTML elements and CSS Flexbox with media queries to create a seamless, accessible experience for all users.</p>
                    <h4>Tech Stack: HTML, CSS,Node.js, Javascript </h4>
                    <div className="project__button">
                        <a href="https://github.com/adekoelijah/hospital" target="blank" rel="noopener noreferrer" className='btn'>Github</a>
                        <a href="https://adekoelijah.github.io/hospital/" target="blank" rel="noopener noreferrer" className='btn primary'>Live Demo</a>
                    </div>
                </div>



                <div className="card">
                    <div className="detail__image">
                        <img src={image7} alt="blog" />
                    </div>
                    <h3>Revid AI</h3>
                    <p>Revid AI is a clean, responsive landing page I built using HTML and CSS, focused on showcasing an AI-powered service with sleek design and intuitive layout. </p>
                    <p>One key challenge was balancing modern aesthetics with fast performance, which I solved using semantic HTML structure and optimized CSS styling.</p>
                    <h4>Tech Stack: HTML, CSS,Node.js, Javascript </h4>
                    <div className="project__button">
                        <a href="https://github.com/adekoelijah/revid-ai" target="blank" rel="noopener noreferrer" className='btn'>Github</a>
                        <a href="https://adekoelijah.github.io/revid-ai/" target="blank" rel="noopener noreferrer" className='btn primary'>Live Demo</a>
                    </div>
                </div>




            </div>
            <div className="load__more">
                <h3>View More Projects</h3>
                <div className="about__me-dot"></div>
                <a href="https://github.com/adekoelijah?tab=repositories" target="blank" rel="noopener noreferrer" className='btn'> Top Projects </a>

            </div>
            

        </div>
    </section>
  )
}

export default Project
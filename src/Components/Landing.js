import 'bootstrap/dist/css/bootstrap.min.css';
import me from '../web_portfolio_img2.jpg';
import {Link} from 'react-scroll';
import { useSpring, animated, useInView, config } from 'react-spring';

 function Landing(){
  const [ref, slideLR] = useInView(
    () => ({
      from: {
        transform: 'translateX(-100%)',
        opacity: 0
      },
      to: {
        transform: 'translateX(0%)',
        opacity: 1
      },
      config: {
        tension: 280,
        friction: 120,
      },
    }),
    {
      rootMargin: '0% 0%',
      once: true,
    }
  )

  const [ref2, slideRL] = useInView(
    () => ({
      from: {
        transform: 'translateX(50%)',
        opacity: 0
      },
      to: {
        transform: 'translateX(0%)',
        opacity: 1
      },
      config: {
        tension: 280,
        friction: 120,
      },
    }),
    {
      rootMargin: '20% 0%',
      once: true,
    }
  )

    return(
    <div id = "home" className="container-fluid  py-5 alt1"> 
    <div className="row align-items-center">
      <div className ="col-md-2"></div>
      <animated.div ref={ref} style = {slideLR} className = "col-md-4">
      <img className ="rounded-circle img-fluid w-75 mb-5" src={me} alt = "Me"/>
      </animated.div>
      
      <animated.div ref={ref2} style = {slideRL} className = "col-md-5 rounded-5">
      <p className="display-1 primary-text fw-bold">Heres the Deal</p>
        <p className="display-1 primary-text fw-bold">About Me.</p>
      </animated.div>
      </div>  
    <div className="row align-items-center">
      <div className = "col-md-2"></div>
      <animated.div ref={ref} style = {slideLR} className = "col-md-4">
        <p className ="display-6 primary-text">Zane ThummBorst</p>
        <p className="secondary-text">Hello, hello! Welcome to my developer portfolio.
         The purpose of this site is to hopefully give you, the viewer, a better idea of who I am, what I’ve accomplished,
          and what I want to accomplish!
        </p>
      </animated.div>
      <animated.div ref={ref2} style = {slideRL} className="col-md-6">
      <Link to="about" spy={true} delay={0}><button type="button" className="btn btn-lg w-75 mt-3 navstyle primary-text rounded-pill fw-bold">About</button></Link>
      <Link to="projects" spy={true} delay={0}><button type="button" className="btn btn-lg w-75 mt-3 navstyle primary-text rounded-pill fw-bold">Projects</button></Link>
      <Link to="contact" spy={true} delay={0}><button type="button" className="btn btn-lg w-75 mt-3 navstyle primary-text rounded-pill fw-bold">Contact Me!</button></Link>
      </animated.div>
    </div>
  </div>)
 }

 export default Landing
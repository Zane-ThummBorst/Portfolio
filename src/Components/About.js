import 'bootstrap/dist/css/bootstrap.min.css';
import me from '../web_portfolio_img2.jpg';
import { useSpring, animated, useInView, config } from 'react-spring';

function About() {
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
    }
  )
  return(  
  <div id ="projects" className="container-fluid py-5 alt1">
  <div className ="row">
        <div className =" col-md-2"></div>
        <div className =" col-md-8">
          <p className="display-2 text-cente primary-text">Oh God What Have I done!?!</p>
        </div>
        <div className =" col-md-2"></div>
      </div>

  <animated.div ref={ref} style={slideLR} className ="row">
  <div className="col-md-4">
    <div className="card shadow">
      <div className="card-body d-grid">
        <img src={me} className="card-img-top img-fluid" alt="Project Photo"/>
      </div>
      <div className="bg-light pt-1">
        <p className="mx-4 secondary-text">This is one of our tea blends. Drink it when you want. Don't drink it if you don't want tea. Check out the different blends
      if you don't like this particular tea!</p>
      <div className="d-flex justify-content-start mb-3 ms-4">
        <div className="btn-group">
          <button type="button" className="btn  btn-lg btn-outline-primary">Desc</button>
        </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card shadow">
      <div className="card-body d-grid">
        <img src={me} className="card-img-top img-fluid" alt="Project Photo"/>
      </div>
      <div className="bg-light pt-1">
        <p className="mx-4 secondary-text">This is one of our tea blends. Drink it when you want. Don't drink it if you don't want tea. Check out the different blends
      if you don't like this particular tea!</p>
      <div className="d-flex justify-content-start mb-3 ms-4">
        <div className="btn-group">
          <button type="button" className="btn  btn-lg btn-outline-primary">Desc</button>
        </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card shadow">
      <div className="card-body d-grid">
        <img src={me} className="card-img-top img-fluid" alt="Project Photo"/>
      </div>
      <div className="bg-light pt-1">
        <p className="mx-4 secondary-text">This is one of our tea blends. Drink it when you want. Don't drink it if you don't want tea. Check out the different blends
      if you don't like this particular tea!</p>
      <div className="d-flex justify-content-start mb-3 ms-4">
        <div className="btn-group">
          <button type="button" className="btn  btn-lg btn-outline-primary">Desc</button>
        </div>
        </div>
      </div>
    </div>
  </div>
  </animated.div>    

  </div>
  )
}

export default About
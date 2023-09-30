import 'bootstrap/dist/css/bootstrap.min.css';
import { useSpring, animated, useInView, config } from 'react-spring';

function Dude(){
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
    
      const [ref2, slideRL] = useInView(
        () => ({
          from: {
            transform: 'translateX(100%)',
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
        <div id = "about" className="container-fluid py-5 alt2"> 
        <div className ="row">
          <div className =" col-md-4"></div>
          <div className =" col-md-4">
            <p className="display-2 text-center primary-text">About</p>
          </div>
          <div className =" col-md-4"></div>
        </div>

        <div className ="row">
          <div className =" col-md-2"></div>
          <animated.div ref={ref} style={slideLR} className =" col-md-4">
            <p className="display-6 text-center primary-text">This is the dude I am</p>
            <p className= "secondary-text">This is a little bit about me, this is what i like to do, i have to think about what
              I want to put in this section, probably what interests me, what my educations was, how i ended up
              where I am etc. etc. THis is MY portfolio so it should have MY interest and field i want to be in!
            </p>
            <p className="secondary-text">This is a little bit about me, this is what i like to do, i have to think about what
              I want to put in this section, probably what interests me, what my educations was, how i ended up
              where I am etc. etc. THis is MY portfolio so it should have MY interest and field i want to be in!</p>
          </animated.div>
          <div className =" col-md-4">
          <div class="container mt-5">
        <animated.div ref={ref2} style={slideRL} class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Education
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Content for Panel 1 goes here.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Coursework
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Content for Panel 2 goes here.
                    </div>
                </div>
            </div>
            
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        skills
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Content for Panel 3 goes here.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Work Experience
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Content for Panel 4 goes here.
                    </div>
                </div>
            </div>
        </animated.div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.5.0/dist/js/bootstrap.bundle.min.js"></script>
          </div>
 
          <div className =" col-md-2"></div>
        </div>
    </div>
    )
}

export default Dude
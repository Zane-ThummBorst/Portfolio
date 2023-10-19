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
          rootMargin: '-10% 0%',
          once: true,
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
          rootMargin: '-10% 0%',
          once: true,
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
            <p className= "secondary-text">&emsp; A little bit about me, I am currently a recent graduate from Stevens Institute of 
            Technology, and work as a part time tutor for Computer Science topics and programming. On the side, you can catch me 
            trying to keep up with developer communities in technologies I’m interested in, as well as the latest news in random 
            things like music and baseball.
            </p>
            <p className="secondary-text">&emsp; In my time at university, I was exposed to a lot of different Computer Science fields,
             studies, and disciplines, but none of them left as much of a mark as my Web Development Courses did.
              This was for a few reasons. One was because the professor who taught those courses (shout out to my 
              favorite professor and inspiration, an esteemed Patrick Hill) made them extremely interesting. 
              Another was the kind of problem solving that web development had forced out of me (the excruciating,
               but extremely rewarding kind). From then on I have had two goals, one was to finish College in one piece (check), 
               and another was to force my way into a web development career path. Since then I have done my very best to 
               keep up and practice all things web applications, and hope to continue doing so for many years.</p>
          </animated.div>
          <div className =" col-md-5">
          <div class="container mt-5">
        <animated.div ref={ref2} style={slideRL} class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button primary-text" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Education
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    <ul class="list-group">
                      <li class="list-group-item secondary-text">School: Stevens Institute of Technology</li>
                      <li class="list-group-item secondary-text">Field of Study: Computer Science</li>
                      <li class="list-group-item secondary-text">Degree Level: Bachelor's</li>
                      <li class="list-group-item secondary-text">GPA: 3.68</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed primary-text" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Coursework
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body d-flex flex-wrap secondary-text">
                      <p class="bg-light border m-2 p-2 rounded"> Data Structures</p>
                      <p class="bg-light border m-2 p-2 rounded"> Algorithms </p>
                      <p class="bg-light border m-2 p-2 rounded"> Web Development(Intro, I, II)</p>
                      <p class="bg-light border m-2 p-2 rounded"> Cloud Computing (Intro) </p>
                      <p class="bg-light border m-2 p-2 rounded"> Discrete Data Structures</p>
                      <p class="bg-light border m-2 p-2 rounded"> Human Computer Interaction </p>
                      <p class="bg-light border m-2 p-2 rounded"> Agile Development </p>
                      <p class="bg-light border m-2 p-2 rounded"> Computer Organization</p>
                      <p class="bg-light border m-2 p-2 rounded"> Operating Systems</p>
                      <p class="bg-light border m-2 p-2 rounded"> Systems Programing </p>
                      <p class="bg-light border m-2 p-2 rounded"> Programming Languages</p>
                      <p class="bg-light border m-2 p-2 rounded"> Concurrent Programming </p>
                      <p class="bg-light border m-2 p-2 rounded"> Software Development Process</p>
                      <p class="bg-light border m-2 p-2 rounded"> Database Management </p>
                      <p class="bg-light border m-2 p-2 rounded"> Cyber Security (Intro) </p>
                    </div>
                </div>
            </div>
            
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed primary-text" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Technical Skills
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body d-flex flex-wrap secondary-text">
                      <p class="bg-light border m-2 p-2 rounded"> Javascript</p>
                      <p class="bg-light border m-2 p-2 rounded"> Typescript </p>
                      <p class="bg-light border m-2 p-2 rounded"> Java</p>
                      <p class="bg-light border m-2 p-2 rounded"> C++ </p>
                      <p class="bg-light border m-2 p-2 rounded"> Python </p>
                      <p class="bg-light border m-2 p-2 rounded"> R/ RStudio </p>
                      <p class="bg-light border m-2 p-2 rounded"> Ruby </p>
                      <p class="bg-light border m-2 p-2 rounded"> HTML</p>
                      <p class="bg-light border m-2 p-2 rounded"> CSS </p>
                      <p class="bg-light border m-2 p-2 rounded"> NodeJS/NPM </p>
                      <p class="bg-light border m-2 p-2 rounded"> ReactJS</p>
                      <p class="bg-light border m-2 p-2 rounded"> Express </p>
                      <p class="bg-light border m-2 p-2 rounded"> Flask</p>
                      <p class="bg-light border m-2 p-2 rounded"> Django </p>
                      <p class="bg-light border m-2 p-2 rounded"> VueJS </p>
                      <p class="bg-light border m-2 p-2 rounded"> Bootstrap5</p>
                      <p class="bg-light border m-2 p-2 rounded"> React Spring </p>
                      <p class="bg-light border m-2 p-2 rounded"> MongoDB </p>
                      <p class="bg-light border m-2 p-2 rounded"> noSQL </p>
                      <p class="bg-light border m-2 p-2 rounded"> Git/Github </p>
                      <p class="bg-light border m-2 p-2 rounded"> JQuery </p>
                      <p class="bg-light border m-2 p-2 rounded"> SASS </p>
                      <p class="bg-light border m-2 p-2 rounded"> Material UI</p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed primary-text" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Developer Skills
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div class="accordion-body d-flex flex-wrap secondary-text">
                      <p class="bg-light border m-2 p-2 rounded"> Agile Development</p>
                      <p class="bg-light border m-2 p-2 rounded"> Scrum </p>
                      <p class="bg-light border m-2 p-2 rounded"> CI/CD </p>
                      <p class="bg-light border m-2 p-2 rounded"> Version Control </p>
                      <p class="bg-light border m-2 p-2 rounded"> Object Oriented Programming</p>
                      <p class="bg-light border m-2 p-2 rounded"> Functional Programming </p>
                      <p class="bg-light border m-2 p-2 rounded"> Communication </p>
                      <p class="bg-light border m-2 p-2 rounded"> Creative </p>
                      <p class="bg-light border m-2 p-2 rounded"> Problem Solving</p>
                      <p class="bg-light border m-2 p-2 rounded"> Adaptable</p>
                      <p class="bg-light border m-2 p-2 rounded"> Time Management</p>
                      <p class="bg-light border m-2 p-2 rounded"> Resilient </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                    <button class="accordion-button collapsed primary-text" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Work Experience
                    </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    <ul class="list-group secondary-text">
                      <li class="list-group-item">ID Tech | Remote</li>
                      <li class="list-group-item">Tech Camp Instructor</li>
                      <li class="list-group-item">5/22 - present</li>
                      <li class="list-group-item">Working as a virtual tutor to teach programming languages and general computer science topics. 
                      Teaching in both groups and one on one sessions with age groups 10 – 18 years old.
                      Supporting other instructors tutoring sessions over Slack and Zoom. </li>
                    </ul>
                    <ul class="list-group my-5 secondary-text">
                      <li class="list-group-item">PC Components | Seaside Park</li>
                      <li class="list-group-item">NJ Warehouse Assistant</li>
                      <li class="list-group-item">5/21 - 8/21</li>
                      <li class="list-group-item">Handled requests tickets to locate and ship PC and hardware parts in a warehouse.
                      Organized and maintained warehouse space, consolidated, and stacked boxes when appropriate.</li>
                    </ul>
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
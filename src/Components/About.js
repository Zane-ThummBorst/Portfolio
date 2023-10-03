import 'bootstrap/dist/css/bootstrap.min.css';
import me from '../web_portfolio_img2.jpg';
import port_snap from '../images/portfolio_snap.jpg';
import base_snap from '../images/onbase_snap.jpg';
import duck_snap from '../images/duckattractions_snap.jpg';
import gedcom_snap from '../images/gedcom_snap.jpg';
import myway_snap from '../images/myway_snap.jpg';
import skill_snap from '../images/skill_snap.jpg';
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
      rootMargin: '-10% 0%',
      once: true,
    }
  )
  return(  
  <div id ="projects" className="container-fluid py-5 alt1">
  <div className ="row">
        <div className =" col-md-1"></div>
        <div className =" col-md-10">
          <p className="display-2 text-center primary-text">Here are Some Things I've Done</p>
        </div>
        <div className =" col-md-1"></div>
      </div>

  <animated.div ref={ref} style={slideLR} className ="row">
  <div className="col-md-4">
    <div className="card border-2 shadow navstyle mt-3">
      <div className="card-body d-grid">
        <img src={base_snap} className="card-img-top img-fluid" alt="Project Photo"/>
        <p className="h3 card-title primary-text">On Base</p>
        <p className="secondary-text">On Base is my most recent personal project. Built using Django and MLB stats API, this app can currently retrieve
          current roster data and stats for most (if not all) MLB players by season. It also stands as my first Django project that
          I've continuely dedicated time to.
        </p>
        <a className="link border mx-auto p-1 rounded" target="_blank" href="https://github.com/Zane-ThummBorst/MLBstats">Want to See more?</a>
      </div>
    </div>
    <div className="card shadow navstyle border-2 mt-3">
      <div className="card-body d-grid">
        <img src={myway_snap} className="card-img-top img-fluid" alt="Project Photo"/>
        <p className="h3 card-title primary-text">MyWay</p>
        <p className="secondary-text"> MyWay is one of my first web apps that I've ever helped complete using NodeJS. The goal of this project was to create
           a music, artist, and album rating app using Node, MongoDB, and ExpressJS. It was an end of the semester project that I made with
          4 other friends.  My personal takeaways that I remeber from this project was gathering a better understanding of client-side server-side communication,
          routing Organization, jquery, and DOM manipulation.
        </p>
        <a className="link border mx-auto p-1 rounded" target="_blank" href="https://github.com/MspMarik/myway">Want to See more?</a>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card border-2 navstyle shadow mt-3">
      <div className="card-body d-grid">
        <img src={port_snap} className="card-img-top img-fluid" alt="Project Photo"/>
        <p className="h3 card-title primary-text">This Portfolio</p>
        <p className="secondary-text">This was a long time coming, but I'm still proud of the creation of this portfolio as it gave me a chance to really think about
          how I approach frontend design.
        </p>
        <a className="link border mx-auto p-1 rounded" target="_blank" href="https://github.com/Zane-ThummBorst/Portfolio">You're already looking it at, but heres a to the github anyway!</a>
      </div>
    </div>
    <div className="card border-2 navstyle shadow mt-3">
      <div className="card-body d-grid">
        <img src={duck_snap} className="card-img-top img-fluid" alt="Project Photo"/>
        <p className="h3 card-title primary-text">Duck Attraction</p>
        <p className= "secondary-text">This is The first project that I ever help make for a Web Dev course. I like to include this to both show and remind myself how
          far I've come in my journey. The goal of Duck attractions was to rate the nearby locations close to our college campus. It served as
          my introduction for how CSS and HTML worked, and taught me the importance of responsive design philoshphy.
        </p>
        <a className="link border mx-auto p-1 rounded" target="_blank" href="https://github.com/Zane-ThummBorst/WebDev-HTML-CSS-JS-/tree/main/DuckAttractions">Want to See more?</a>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card border-2 navstyle shadow mt-3">
      <div className="card-body d-grid">
        <img src={gedcom_snap} className="card-img-top img-fluid" alt="Project Photo"/>
        <p className="h3 card-title primary-text">GEDCOM Parser Project</p>
        <p className="secondary-text">Project in group of 5 using Agile methodologies to create a series of functions and usecases to parse a family tree file(GEDCOM). Some valuable take aways:
          experience using agile methods, experience implementing unit testing, great oppurtunity to see how others code.
        </p>
        <a className="link border mx-auto p-1 rounded" target="_blank" href="https://github.com/Ankit5467/cs555tm132022Fall">Want to see more?</a>
      </div>
    </div>
    <div className="card border-2 navstyle shadow mt-3">
      <div className="card-body d-grid">
        <img src={skill_snap} className="card-img-top img-fluid" alt="Project Photo"/>
        <p className="h3 card-title primary-text">Skill Based Career Compass</p>
        <p> The final piece of work that I ever had to complete for school, Career Compass was a massive journey of a project. The goal of the project
          was to parse resume data to help and create a data aggregate system to accurately predict someones career path based on things such as
          relevent work, education and location. This project was a doozy because I can firmly say that I have never worked on anything with more pitfalls, which wasn't necessarily a bad thing!
          I got many valuable lessons on some of the tactics companies use to gather and organize data for useage, but I got even more valuable lessons on the dos and don'ts of undertaking a project
          you have very little knowledge on. My main take away from this project was data philosophy and how to constantly update and condense incoming data into a usable form.
        </p>
        <p className="link border mx-auto p-1 rounded" href="">Source Code Unavailable</p>
      </div>
    </div>
  </div>
  </animated.div>    

  </div>
  )
}

export default About
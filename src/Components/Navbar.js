import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/js/src/collapse.js"
import {Link} from 'react-scroll';

function Navbar(){
    return(
      <div className="container-fluid-sm mt-3">
      <nav className=" navstyle navbar fixed-top navbar-expand-md shadow">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          <Link to="home" spy={true} delay={0}><a className="nav-link tertiary rounded"  href="">Home</a></Link>
            </li>
            <li className="nav-item">
              <a className="nav-link tertiary rounded " target="_blank" href="https://github.com/Zane-ThummBorst">GitHub</a>
            </li>
            <li className="nav-item">
              <a className="nav-link tertiary rounded" target="_blank" href="https://www.linkedin.com/in/zane-thummborst-69274a1a4/">Linkedin</a>
            </li>
          </ul>
        </div>
      </nav>

      </div>

      
    )
}

export default Navbar
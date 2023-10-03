import 'bootstrap/dist/css/bootstrap.min.css';

function Footer(){
    return(
        <div>
        <div className='container-fluid py-3 navstyle'></div>
        <div className = "container-fluid py-5 navstyle">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-3">
              <p className ="h1 primary-text">Zane ThummBorst</p>
              <p className ="mt-3 secondary-text">Always moving forward.</p>
              </div>
              <div className="col-md-1"> </div> 
            <div className="col-md-5 ">
            <p className ="h1 primary-text">Portfolio Techstack:</p>
            <ul className="mt-3 list-group list-group-horizontal-lg">
              <li className="list-group-item navstyle">Nodejs/ NPM</li>
              <li className="list-group-item navstyle">React + React libraries</li>
              <li className="list-group-item navstyle">Bootstrap 5</li>
              <li className="list-group-item navstyle">React Spring</li>
            </ul>
            <div className="col-md-2"></div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Footer

import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    return(
        
    <div id="contact" className="container-fluid py-5 alt2">
    <div clasName = "row">
      {/* <div className ="col-md-2"></div>
      <div className ="col-md-6">
        <p className = "display-2 text-center primary-text">Current Status:I'm Available!</p>
        <p className = "h2 text-center primary-text">If you want to talk, ask me anything, or want to get into an employment opportunity, just shoot me a message!</p>
      </div>
      <div className ="col-md-2"></div> */}
      <div className="row mb-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <p className = "display-2 text-center primary-text">Current Status: I'm Available!</p>
        <p className = "h2 text-center primary-text mt-3">If you want to talk, ask me anything, or want to get into an employment opportunity, just shoot me a message!</p>
        <p className = "h4 text-center secondary-text mt-5">Email: thummborstz@gmail.com</p>
          </div>
        <div className="col-md-2"></div>
      </div>
    </div>
    </div>
    )
}

export default Contact;
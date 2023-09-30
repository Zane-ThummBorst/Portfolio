import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';
import Dude from './Components/Dude';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="Apple">
    <Navbar/>  
    <Landing/>
    <Dude/>
    <About/>
    <Contact/>
    <Footer/>
    </div>

  );
}

export default App;

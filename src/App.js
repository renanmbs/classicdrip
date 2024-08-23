import './App.css';
import { Images } from './images/images';
import { Logo } from './logo/logo';
import { FaInstagram } from "react-icons/fa";


function App() {
  
  return (
    <div className="App">

      <div id='symbols'>
        <a href='https://www.instagram.com/classicdripllc/' target="_blank" rel="noopener noreferrer"><FaInstagram className=''/> </a>
      </div>

      <div id='but_buy'>
        <a href='https://shopclassicdrip.com/' target="_blank" rel="noopener noreferrer"><button>Buy Now</button></a>      
      </div>
      
      <div id='logo_position'>
        <Logo />
      </div>

      <div id='info'>
        <Images/>
      </div>

    </div>
  );
}

export default App;

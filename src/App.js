import './App.css';
import { Images } from './images/images';
import { Logo } from './logo/logo';
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";




function App() {
  
  return (
    <div className="App">

      <div id='banner'>
      <div id='container'>
        <div id='symbols'>
          <a href='https://www.instagram.com/classicdripllc/' target="_blank" rel="noopener noreferrer"><FaInstagram className='insta'/> </a>
          <a href='https://x.com/classicdripllc?s=21' target="_blank" rel="noopener noreferrer"><FaXTwitter className='twitter'/> </a>
          <a href='mailto:classicdrip585@gmail.com' target="_blank" rel="noopener noreferrer" ><MdOutlineEmail className='email'/></a>
          
        </div>

        <div id='but_buy'>
          <a href='https://shopclassicdrip.com/' target="_blank" rel="noopener noreferrer"><button>Buy Now</button></a>      
        </div>
      </div>
      
      <div id='logo_position'>
        <Logo />
      </div>

      </div>

      <div id='info'>
        <Images/>
      </div>

    </div>
  );
}

export default App;

import React,{useState} from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import {Link} from "react-scroll";
import close from "../../assets/close.jpeg";

const Header = () => {
  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened, setMenuOpened] = useState(false);

  const handleHamburger = () => {
    setMenuOpened((prevState) => !prevState); // Toggle the menuOpened state
  };  

  return (
    <div className="header">
        
        <img src={Logo} alt="" className="logo" />
        {(menuOpened === false && mobile===true) ? 
        (<div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.3rem", 
            borderRadius:"5px"
          }}
          
          onClick={()=>setMenuOpened(true)}
         >
          <img src={Bars} alt="" style={{width: '1.5rem', height: "1.5rem"}} /></div>) : (
          <ul className="header-menu">
            {(mobile === true)? (<li>
                <button
                  className="close-button"
                  id="close-button"
                  onClick={() => setMenuOpened(false)}
                >
                  <img src={close} alt="Close" style={{ width: '1.5rem', height: "1.5rem" }} />
                </button>
              </li>) : (<></>)}
            <li>
              <Link
               to="home"
               spy={true}
               smooth={true}
               onClick={()=>setMenuOpened(false)}
              >Home</Link>
            </li>
            <li>
              <Link
               to="programs"
               spy={true}
               smooth={true}
               onClick={()=>setMenuOpened(false)}
              >Programs</Link>
            </li>

            <li>
              <Link
               to="reasons"
               spy={true}
               smooth={true}
               onClick={()=>setMenuOpened(false)}
              >Why Us</Link>
            </li>

            <li>
              <Link
               to="plans"
               spy={true}
               smooth={true}
               onClick={()=>setMenuOpened(false)}
              >Plans</Link>
            </li>
            
            <li>
              <Link
               to="join-us"
               spy={true}
               smooth={true}
               onClick={()=>setMenuOpened(false)}
              >Join Us</Link>
            </li>
          </ul>
        )}
    </div>
  )
}

export default Header
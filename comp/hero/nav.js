import {ArrowRight16, Menu32, Close32, ArrowDown16} from '@carbon/icons-react';
import {useState, useEffect} from 'react';
export default function Nav(props) {
    const [y, setY] = useState(0);
    const handleNavigation = (e) => {
        const window = e.currentTarget;
        if (y > window.scrollY) {
          console.log("scrolling up");
        } else if (y < window.scrollY) {
          console.log("scrolling down");
        }
        setY(window.scrollY);
      };
    const controlNav = () =>{
      if(window.scroll > 100) {}
    }
    
    // useEffect(() => {
    //     setY(window.scrollY);
    //   }, []);
      
      useEffect(() => {
        window.addEventListener("scroll", (e) => handleNavigation(e));
      
        return () => { // return a cleanup function to unregister our function since its gonna run multiple times
          window.removeEventListener("scroll", (e) => handleNavigation(e));
        };
        
      }, []);
    //   console.log(props.active);

  return (
    <>

      <header id="header" className={`header ${y>200&& 'fill'} `}>

        <nav id="navbar" className="nav">
          <div className='logo-wrap'>
        <img className='logo-png' src='./logo.png'/> 
          <h2 className="logo">
            <span>Smart</span>SafeDrivers </h2></div>
          <input type="checkbox" id="chk" />
          <label for="chk" className="show-menu-btn">
            <i><Menu32 /></i>
          </label>

          <ul className="menu">
            <li className={props.active == "home"? "menu-item scrollto active": "menu-item scrollto "}>
              <a href="/" className='menu-item-detail'>Home  </a>{props.active == "home"?<i><ArrowDown16 /></i>:<i><ArrowRight16 /></i>}
            </li><li className={props.active == "about"? "menu-item scrollto active": "menu-item scrollto "}>
              <a href="/about" className='menu-item-detail'>About  {props.active == "about"?<i><ArrowDown16 /></i>:<i><ArrowRight16 /></i>}</a>
            </li>

            <li className={props.active == "services"? "menu-item scrollto active": "menu-item scrollto "}>
              <a href="/services" className='menu-item-detail'>Services  </a>{props.active == "services"?<i><ArrowDown16 /></i>:<i><ArrowRight16 /></i>}
            </li>
            
            <li className={props.active == "pricing"? "menu-item scrollto active": "menu-item scrollto "}>
              <a href="/pricing" className='menu-item-detail'>Pricing</a>{props.active == "pricing"?<i><ArrowDown16 /></i>:<i><ArrowRight16 /></i>}
            </li>
            <li className={props.active == "contact"? "menu-item scrollto active": "menu-item scrollto "}>
              <a href="/contact" className='menu-item-detail'>Contact Us</a>{props.active == "contact"?<i><ArrowDown16 /></i>:<i><ArrowRight16 /></i>}
            </li>
            <label for="chk" className="hide-menu-btn">
              <i><Close32 /></i>
            </label>
            
          </ul>
         
        </nav>
        {/* <span className="header-bottom-line"></span> */}
          
      </header>
  


    </>
  );
}

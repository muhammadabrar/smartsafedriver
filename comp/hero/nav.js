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
    
    useEffect(() => {
        setY(window.scrollY);
      }, []);
      
      useEffect(() => {
        window.addEventListener("scroll", (e) => handleNavigation(e));
      
        return () => { // return a cleanup function to unregister our function since its gonna run multiple times
          window.removeEventListener("scroll", (e) => handleNavigation(e));
        };
      }, [y]);
      console.log(props.active);
  return (
    <>

      <header className={`header ${y>200&& 'fill'} `}>

        <nav className="nav">
          
          <h2 className="logo"><span>Smart</span>SafeDrivers </h2>
          <input type="checkbox" id="chk" />
          <label for="chk" className="show-menu-btn">
            <i><Menu32 /></i>
          </label>

          <ul className="menu">
            <div className={props.active == "home"? "menu-item active": "menu-item"}>
              <a href="/">Home  </a>{props.active == "home"?<i><ArrowDown16 /></i>:<i><ArrowRight16 /></i>}
            </div>
            <div className={props.active == "services"? "menu-item active": "menu-item"}>
              <a href="/services">Services  </a>{props.active == "services"?<i><ArrowDown16 /></i>:<i><ArrowRight16 /></i>}
            </div>
            <div className={props.active == "pricing"? "menu-item active": "menu-item"}>
              <a href="/pricing">Pricing</a>{props.active == "pricing"?<i><ArrowDown16 /></i>:<i><ArrowRight16 /></i>}
            </div>
            <div className={props.active == "contact"? "menu-item active": "menu-item"}>
              <a href="/contact">Contact Us</a>{props.active == "contact"?<i><ArrowDown16 /></i>:<i><ArrowRight16 /></i>}
            </div>
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

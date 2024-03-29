import { useState } from "react";
import {
    ChevronRight16
  } from "@carbon/icons-react";
export default function Footer() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
      <>

<footer className="footer">
          <div className="footer-top">
        <div className="footer-wrap">
          <div className="footer-info">
            <h3> Smart Safe Drivers</h3>
            <p>
            ACICO Business Park unit 1 <br/>Dubai - United Arab Emirates
              <br />
              <br />
              <strong>Phone:</strong> <a href="tel:+971 54 449 0233">+971 54 449 0233</a>
              <br />
              <strong>Email:</strong> smartsafedrivers@gmail.com
              <br />
            </p>
          </div>
          <div className="footer-links first-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i ><ChevronRight16 /></i> <a href="#">Home</a>
              </li>
              <li>
                <i ><ChevronRight16 /></i> <a href="#">About us</a>
              </li>
              <li>
                <i ><ChevronRight16 /></i> <a href="#">Services</a>
              </li>
              <li>
                <i ><ChevronRight16 /></i>{" "}
                <a href="#">Pricing</a>
              </li>
              <li>
                <i ><ChevronRight16 /></i>{" "}
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Our Services</h4>
            <ul>
       
              <li>
                <i ><ChevronRight16 /></i>{" "}
                <a href="#">Airport Transfers</a>
              </li>
              <li>
                <i ><ChevronRight16 /></i>{" "}
                <a href="#">After Party Pickup</a>
              </li>
              <li>
                <i ><ChevronRight16 /></i> <a href="#">Road Trip Driving</a>
              </li>
              <li>
                <i ><ChevronRight16 /></i>{" "}
                <a href="#">More</a>
              </li>
            </ul>
          </div>
          
        </div>
        </div>
        <div className="footer-bottom">
        <div class="copyright">
        &copy; Copyright <strong><span> SmartSafeDrivers</span></strong>. All Rights Reserved
      </div>
      {/* <div class="credits">
       
        Designed by <a href="https://bootstrapmade.com/">Muhammad Abrar</a>
      </div> */}
          </div>
      </footer>
        
    

       </>
    )
  }
import { useState } from "react";

export default function How_to() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
      <>

        
<section id="why-us" className="services why-us">
        <div className="wrap">
          <h1 className="section-title">
            How <span>It Work</span>
            {/* <hr/> */}
          </h1>
          <p>
            <span>Call us or send us a msg on WhatsApp</span> to make your
            reservation for a safe driver.
          </p>
          <div className="why-us-items">
            <>
              <div className="box">
                <span>01</span>
                <h4>Make a Booking</h4>
                <p>Make a Booking Request Online or By Chat.</p>
              </div>
            </>

            <>
              <div className="box">
                <span>02</span>
                <h4>Pickup Location</h4>
                <p>Provide Pickup Date, Time and Contact Details.</p>
              </div>
            </>

            <>
              <div className="box">
                <span>03</span>
                <h4> Driver Will Arrive</h4>
                <p>Driver Will Contact Few In Minutes.</p>
              </div>
              <div className="box">
                <span>04</span>
                <h4> Pay Cash or Card</h4>
                <p>We accept both credit card and cash payments.</p>
              </div>
            </>
          </div>
        </div>
      </section>

       </>
    )
  }
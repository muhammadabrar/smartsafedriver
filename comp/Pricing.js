import { useState } from "react";
import {
    CheckmarkFilled24
  } from "@carbon/icons-react";
export default function Pricing_comp() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
      <>

        
    
<section className="services">
        <div className="wrap">
          <h1 className="section-title" style={{ marginTop: "3rem" }}>
            <span>Price</span> Structure
            {/* <hr/> */}
          </h1>
          <p style={{ fontSize: "2rem" }}>
            We offer a very flexible price structure to cater all types of
            customer requirements.
          </p>
          <div className="price-plans">
            <div className="price-plan">
              <div>
                <h1 className="plan-title">Within-Dubai</h1>
                <p className="plan-note">Single Pickup Single Drop-off</p>
                <hr />
              </div>
              <div className="plan-points">
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
              </div>
              <button className="service-btn ">WhatsApp Now</button>
            </div>
            <div className="price-plan active">
              <div>
                <h1 className="plan-title">Inter-Emirates</h1>
                <p className="plan-note">Accross the UAE</p>
                <hr />
              </div>
              <div className="plan-points">
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 10 - 20 KM AED 105</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p>20 - 30 KM AED 120</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
              </div>
              <button className="plan-btn ">WhatsApp Now</button>
            </div>
            <div className="price-plan">
              <h1 className="plan-title">Hourly Plan</h1>
              <p className="plan-note">Minimum 2 Hours Booking</p>
              <hr />
              <div className="plan-points">
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
                <div className="point">
                  <i>
                    <CheckmarkFilled24 />
                  </i>{" "}
                  <p> 0 - 10 KM AED 90</p>
                </div>
              </div>
              <button className="service-btn ">WhatsApp Now</button>
            </div>
          </div>
        </div>
      </section>

       </>
    )
  }
import { useState } from "react";
import {
    CheckmarkFilled24, ChevronRight16
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
            Get instant price using our latest online booking system. Save time save money. Travel better.<br/>
            We offer a very flexible pricing structure to meet the needs of all types of customers.

          </p>
          <div className="price-plans">
            <div className="price-plan">
              <div>
                <h1 className="plan-title">Hourly Plan</h1>
                <p className="plan-note">Minimum 2 Hours Booking</p>
                <hr />
              </div>
              <>
              <ul class="plan-points">
										<li className="point"><i><CheckmarkFilled24 /></i>2 Hours AED 160</li>
										<li className="point"><i><CheckmarkFilled24 /></i>3 Hours AED 240</li>
										<li className="point"><i><CheckmarkFilled24 /></i>4 Hours AED 320</li>
										<li className="point"><i><CheckmarkFilled24 /></i>5 Hours AED 400</li>
										<li className="point"><i><CheckmarkFilled24 /></i>8 Hours (1 Day) AED 500</li>
										<li className="point"><i><CheckmarkFilled24 /></i>16 Hours (2 Days) AED 1000</li>
										<li className="point"><i><CheckmarkFilled24 /></i>24 Hours (3 Days) AED 1500</li>
									</ul>
               
                
              </>
              <a  href={`https://wa.me/971581462204?text=I will like to make a booking for a SmartSafeDriver.`} className="service-btn ">WhatsApp Now</a>
            </div>
            <div className="price-plan active">
              <div>
                <h1 className="plan-title">Inter-Emirates</h1>
                <p className="plan-note">
                Accross the UAE
								</p>
                <hr />
              </div>
              <ul class="plan-points">
										<li className="point"><i><CheckmarkFilled24 /></i>Dubai <ChevronRight16/> Abu Dhabi AED 440</li>
										<li className="point"><i><CheckmarkFilled24 /></i>Dubai <ChevronRight16/> Sharjah AED 160</li>
										<li className="point"><i><CheckmarkFilled24 /></i>Dubai <ChevronRight16/> Ajman AED 210</li>
										<li className="point"><i><CheckmarkFilled24 /></i>Dubai <ChevronRight16/> UAQ AED 240</li>
										<li className="point"><i><CheckmarkFilled24 /></i>Dubai <ChevronRight16/> Rak AED 400</li>
										<li className="point"><i><CheckmarkFilled24 /></i>Dubai <ChevronRight16/> Fujairah AED 400</li>
										<li className="point"><i><CheckmarkFilled24 /></i>Dubai <ChevronRight16/> Al Ain AED 400</li>
									</ul>
              <a  href={`https://wa.me/971581462204?text=I will like to make a booking for a SmartSafeDriver.`} className="plan-btn ">WhatsApp Now</a>
            </div>
            <div className="price-plan">
            <div>
                <h1 className="plan-title">Within-Dubai</h1>
                <p className="plan-note">Single Pickup Single Drop-off</p>
                <hr />
              </div>
              <ul class="plan-points">
									<li className="point"><i><CheckmarkFilled24 /></i>0 - 10 KM AED 90 </li>
									<li className="point"><i><CheckmarkFilled24 /></i>10 - 20 KM AED 105</li>
									<li className="point"><i><CheckmarkFilled24 /></i>20 - 30 KM AED 120</li>
									<li className="point"><i><CheckmarkFilled24 /></i>30 - 40 KM AED 135</li>
									<li className="point"><i><CheckmarkFilled24 /></i>40 - 50 KM AED 150</li>
									<li className="point"><i><CheckmarkFilled24 /></i>50 - 60 KM AED 165</li>
									<li className="point"><i><CheckmarkFilled24 /></i>60 - 70 KM AED 180</li>
									</ul>
              <a  href={`https://wa.me/971581462204?text=I will like to make a booking for a SmartSafeDriver.`} className="service-btn ">WhatsApp Now</a>
            </div>
          </div>
        </div>
      </section>

       </>
    )
  }
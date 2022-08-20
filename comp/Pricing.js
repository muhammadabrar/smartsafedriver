import { useState } from "react";
import {
    CheckmarkFilled24, ChevronRight16
  } from "@carbon/icons-react";
export default function Pricing_comp() {
 const [phone, setphone] = useState(971544490233);

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
										<li className="point"><i><CheckmarkFilled24 /></i>2 Hours QAR 160</li>
										<li className="point"><i><CheckmarkFilled24 /></i>3 Hours QAR 240</li>
										<li className="point"><i><CheckmarkFilled24 /></i>4 Hours QAR 320</li>
										<li className="point"><i><CheckmarkFilled24 /></i>5 Hours QAR 400</li>
										<li className="point"><i><CheckmarkFilled24 /></i>8 Hours (1 Day) QAR 500</li>
										<li className="point"><i><CheckmarkFilled24 /></i>16 Hours (2 Days) QAR 1000</li>
										<li className="point"><i><CheckmarkFilled24 /></i>24 Hours (3 Days) QAR 1500</li>
									</ul>
               
                
              </>
              <a  href={`https://wa.me/${phone}?text=hello, I would like to book a safe driver.`} className="service-btn ">WhatsApp Now</a>
            </div>
            <div className="price-plan active">
              <div>
                <h1 className="plan-title">Inter-Emirates</h1>
                <p className="plan-note">
                Accross the <b>Qatar</b>
								</p>
                <hr />
              </div>
              <ul class="plan-points">
										<li className="point"><i><CheckmarkFilled24 /></i>Dubai <ChevronRight16/> Madinat ash Shamal QAR 440</li>
										<li className="point"><i><CheckmarkFilled24 /></i>Dubai <ChevronRight16/> Ar Rayyan QAR 160</li>
										<li className="point"><i><CheckmarkFilled24 /></i>Dubai <ChevronRight16/> Al Wakrah 210</li>
										<li className="point"><i><CheckmarkFilled24 /></i>Dubai <ChevronRight16/> Al Khawr QAR 240</li>
										<li className="point"><i><CheckmarkFilled24 /></i>Dubai <ChevronRight16/> Baladiyat Umm Salal  QAR 400</li>
										<li className="point"><i><CheckmarkFilled24 /></i>Dubai <ChevronRight16/> Baladiyat ar Rayyan  QAR 400</li>
										<li className="point"><i><CheckmarkFilled24 /></i>Dubai <ChevronRight16/> Baladiyat ad Dawhah QAR 400</li>
										<li className="point"><i><CheckmarkFilled24 /></i>Dubai <ChevronRight16/> Baladiyat az Za`ayin QAR 400</li>

									</ul>
              <a  href={`https://wa.me/${phone}?text=hello, I would like to book a safe driver.`} className="plan-btn ">WhatsApp Now</a>
            </div>
            <div className="price-plan">
            <div>
                <h1 className="plan-title">Within-Dubai</h1>
                <p className="plan-note">Single Pickup Single Drop-off</p>
                <hr />
              </div>
              <ul class="plan-points">
									<li className="point"><i><CheckmarkFilled24 /></i>0 - 10 KM QAR 90 </li>
									<li className="point"><i><CheckmarkFilled24 /></i>10 - 20 KM QAR 105</li>
									<li className="point"><i><CheckmarkFilled24 /></i>20 - 30 KM QAR 120</li>
									<li className="point"><i><CheckmarkFilled24 /></i>30 - 40 KM QAR 135</li>
									<li className="point"><i><CheckmarkFilled24 /></i>40 - 50 KM QAR 150</li>
									<li className="point"><i><CheckmarkFilled24 /></i>50 - 60 KM QAR 165</li>
									<li className="point"><i><CheckmarkFilled24 /></i>60 - 70 KM QAR 180</li>
									</ul>
              <a  href={`https://wa.me/${phone}?text=hello, I would like to book a safe driver.`} className="service-btn ">WhatsApp Now</a>
            </div>
          </div>
        </div>
      </section>

       </>
    )
  }
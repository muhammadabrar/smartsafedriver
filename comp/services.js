import {
  Plane32,
  Enterprise32,
  PassengerDrinks32,
  CarFront32,
  TrafficFlow32,
  CabinCareAlert32
} from "@carbon/icons-react";
import { useState } from "react";
export default function Services_comp() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <section id="services" className="services">
        <div className="wrap">
          <h1 className="section-title">
            Our <span>Services</span>
            {/* <hr/> */}
          </h1>
          <p>
            We are a chauffeured car service provider in Dubai (UAE), providing
            a number of safe and reliable services to cater for all your
            traveling needs. Whether you need our services for a weekend outing,
            a shopping trip or late night party you may need a trusted Driver
            who can take you back home or to your desired destination at your
            chosen time. We are also providing short-term drivers for daily,
            weekly and monthly basis at very convenient and low prices.
            <br />
            We make sure that our drivers have a professional attitude and know
            about their responsibilities well. You can just call us or share
            your location with us via WhatsApp to let us know where you are and
            what time to pick you up. Just sit back and relax and let us handle
            the rest. We let you Hire Private Safe Driver Dubai and enjoy sober
            driving services all the time. We make sure that your and your car’s
            safety is our number 1 priority!
          </p>
          <div className="services-items">
            <div
              className="service"
              style={{ backgroundImage: `url('./hero/airport.jpeg')` }}
            >
              <div className="icon-box">
                <div className="icon">
                  <i>
                    <Plane32 />
                  </i>
                </div>
                <h4>
                  <a href="">Airport Transfers</a>
                </h4>
                <p>
                  Had a long flight? Rest assured our safe driver will be
                  waiting for you autside the airport along with your vehicle.
                </p>
                <button className="service-btn ">WhatsApp Now</button>
              </div>
            </div>
            <div
              className="service"
              style={{ backgroundImage: `url('./hero/party.jpg')` }}
            >
              <div className="icon-box">
                <div className="icon">
                  <i>
                    <PassengerDrinks32 />
                  </i>
                </div>
                <h4>
                  <a href="">After Party Pickup</a>
                </h4>
                <p>
                  Let us know when it is time to go afer a great time at party
                  and we will drive you home safely.
                </p>
                <button className="service-btn ">WhatsApp Now</button>
              </div>
            </div>
            <div
              className="service"
              style={{ backgroundImage: `url('./hero/bg1.jpg')` }}
            >
              <div className="icon-box">
                <div className="icon">
                  <i>
                    <Enterprise32 />
                  </i>
                </div>
                <h4>
                  <a href="">City Tour</a>
                </h4>
                <p>
                  Looking for someone who could show help you showing around
                  city to your guests? We will take care of that.
                </p>
                <button className="service-btn ">WhatsApp Now</button>
              </div>
            </div>
            <div
              className="service"
              style={{ backgroundImage: `url('./hero/corporate.jpg')` }}
            >
              <div className="icon-box">
                <div className="icon">
                  <i>
                    <CarFront32 />
                  </i>
                </div>
                <h4>
                  <a href="">Corporate Transfers</a>
                </h4>
                <p>
                  We are the best choice if you need someone to drive your
                  organizations C Level Executives. Book us and see how.
                </p>
                <button className="service-btn ">WhatsApp Now</button>
              </div>
            </div>
            <div
              className="service"
              style={{ backgroundImage: `url('./hero/roadtrip.jpg')` }}
            >
              <div className="icon-box">
                <div className="icon">
                  <i>
                    <TrafficFlow32 />
                  </i>
                </div>
                <h4>
                  <a href="">Road Trip Driving</a>
                </h4>
                <p>
                  All you planning a road trip accross the Emirates but not sure
                  who will drive? Let us drive so you can enjoy the trip.
                </p>
                <button className="service-btn ">WhatsApp Now</button>
              </div>
            </div>
            <div
              className="service"
              style={{ backgroundImage: `url('./hero/cartesting.jpg')` }}
            >
              <div className="icon-box">
                <div className="icon">
                  <i>
                    <CabinCareAlert32 />
                  </i>
                </div>
                <h4>
                  <a href="">Vehicle Testing</a>
                </h4>
                <p>
                  Don’t have time for getting your vehicle tested and renewed?
                  Sit back and let us do the testing and renewal for you.
                </p>
                <button className="service-btn ">WhatsApp Now</button>
              </div>
            </div>

            {/* <div className="service" style={{backgroundImage:`url('./hero/bg1.jpg')`}}>
            <div className="icon-box" >
              <div className="icon"><i><Plane32 /></i></div>
              <h4><a href=""></a></h4>
              <p></p>
            </div>
            </div> */}
          </div>
        </div>
      </section>




      
      
     

      
      {/* "https://api.whatsapp.com/send/?phone=971524837505&text=I will like to make a booking for a SafeDriver." */}
    </>
  );
}

import Head from 'next/head'
import About from '../comp/about';
import Comit from '../comp/comit';
import Contact from '../comp/contact';
import Footer from '../comp/footer';
import Hero from '../comp/hero';
import Intro from '../comp/hero/intro';
import Nav from '../comp/hero/nav';
import How_to from '../comp/how_to';
import Pricing_comp from '../comp/Pricing';
import Services_comp from '../comp/services';
import { useState } from "react";
import Booking from '../comp/booking';

export default function Home() {
  const [booking, setbooking] = useState(false);

  return (
    <>
    
   <Nav active="home" />
   <Intro/>
<Comit/>
<Services_comp/>
<How_to/>
<Pricing_comp/>
<section class="cta2">
      <div class="cta-wrap" data-aos="zoom-in">
      <img src='./logo.png'/>

        <div className="funch-lines">
        <h3>RIDE LIKE ROYALTY</h3>
        <p>SAFE • FRIENDLY • AFFORDABLE</p>
          
        </div>
        <a class="cta-btn"  href='#!' onClick={()=> setbooking(true)}>Book Now</a>

        

      </div>
    </section>
    {booking && <Booking close={()=> setbooking(false)} plan={'plan1'} />}
<About/>
<Contact/>
<Footer/>
     
     </>
  )
}

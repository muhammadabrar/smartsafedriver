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
export default function Home() {

  return (
    <>
    
   <Nav active="home" />
   <Intro/>
<Comit/>
<Services_comp/>
<How_to/>
<Pricing_comp/>
<About/>
<Contact/>
<Footer/>
     
     </>
  )
}

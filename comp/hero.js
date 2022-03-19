import { useState } from "react";
import Nav from "./hero/nav";
import Intro from "./hero/intro";
export default function Hero() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
      <>

         <Nav/>
<Intro/>
    

       </>
    )
  }
  
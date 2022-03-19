import { Add32, CurrencyDollar32, Headset32, BookmarkAdd32, Location32} from "@carbon/icons-react";
import { useState } from "react";
export default function Comit() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
      <>
<section className="comit">
    <div className="comit-wrap">
        <div className="comit-item">
            <i className="icon"><><CurrencyDollar32/></></i>
            <h2>Best Price</h2>
            <p>WE Have best Prioces</p>
        </div>
        <div className="comit-item">
            <i className="icon"><><Location32 /></></i>
            <h2>Destination on Time</h2>
            <p>WE Have best Prioces</p>
        </div>
        <div className="comit-item">
            <i className="icon"><><Headset32 /></></i>
            <h2>24/7 Support</h2>
            <p>WE Have best Prioces</p>
        </div>
        <div className="comit-item">
            <i className="icon"><><BookmarkAdd32 /></></i>
            <h2>Easy Booking</h2>
            <p>WE Have best Prioces</p>
        </div>

    </div>
</section>
       </>
    )
  }
  
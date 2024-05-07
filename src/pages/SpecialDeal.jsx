import React from "react";
import "../styles/pages/SpecialDeal.css";
import img from "../Media/Image_7-300x197.jpg";

const SpecialDeal = () => {
  return (
    <section id="Properties" className="special-deal">
      <h1>Special Deal On Properties</h1>
      <p>
        Properties are selected on discount. Choose any properties for deal.
      </p>
      <div className="special-deal-container">
        <div className="special-deal-left">
          <div className="off-btn">30% OFF</div>
          <h3>Gorgeous Histroic House For Sale</h3>
          <h6>$55,000</h6>
          <p>
            So I said codswallop car boot cheers mufty I don't want no agro are
            you taking the piss cheeky my lady gutted mate excuse my french,
            gormless have it cras.I don't want no agro are
            you taking the piss cheeky my lady gutted mate excuse my french,
            gormless have it cras.
          </p>
          <button>Order Now</button>
        </div>

        <div className="special-deal-right">
          <img src={img} alt="image" />
        </div>
      </div>
    </section>
  );
};

export default SpecialDeal;

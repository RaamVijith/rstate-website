import React from "react";
import "../styles/pages/Clients.css";
import img1 from "../Media/Avatar.jpg";
import img2 from "../Media/Avatar-1.jpg";
import bgImg from "../Media/welcomePic.jpg";

const Clients = () => {
  return (
    <section className="clients">
      <h1>Client's Testimonials</h1>
      <p>Handpicked properties by our clients</p>
      <img class="image-background" src={bgImg} alt="bg img" />

      <div className="client-content">
        <div className="client-content-inside">
            <img  src={img1} alt="client" />

            <div className="client-content-inside-right">
                <p>This is by far the best theme on themeforest. i adapt lots of theme and develope it a wonderful division. get me the more theme from themfroest endrum.</p>
                <h5>JUDITH MICKNNY</h5>
                <h6>Seychelles</h6>
            </div>
        </div>

        <div className="client-content-inside">
            <img  src={img2} alt="client" />

            <div className="client-content-inside-right">
                <p>This is by far the best theme on themeforest. i adapt lots of theme and develope it a wonderful division. get me the more theme from themfroest endrum.</p>
                <h5>JUDITH MICKNNY</h5>
                <h6>Seychelles</h6>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

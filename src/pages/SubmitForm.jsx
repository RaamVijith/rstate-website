import React from "react";
import "../styles/pages/SubmitForm.css";
import bgImg from "../Media/welcomePic.jpg";

const SubmitForm = () => {
  return (
    <section className="submitForm">
      <h1>Request Your Properity Valuation</h1>
      <img class="submitForm-image-background" src={bgImg} alt="bg img" />

      <div className="submitForm-content">
        <p>Personal Information:</p>
        <input className="input1" placeholder="Select I'm A..." />
        <div className="submitForm-content-inside">
          <input className="input1" placeholder="Your Name" />
          <input className="input1" placeholder="Email Address" />
        </div>
      </div>

      <div className="submitForm-content">
        <p>Property Information:</p>
        <input className="input1" placeholder="Select Type" />
        <div className="submitForm-content-inside">
          <input className="input1" placeholder="Select City" />
          <input className="input1" placeholder="Your Budget" />
        </div>
        <div className="submitForm-content-inside">
          <input className="input1" placeholder="No of Beds" />
          <input className="input1" placeholder="Minimum Size (Sq Ft)" />
        </div>
      </div>

      <button>Submit Inquiry</button>
    </section>
  );
};

export default SubmitForm;

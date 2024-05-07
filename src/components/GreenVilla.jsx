import React from "react";
import "../styles/components/GreenVilla.css";
import person from "../Media/Photo.png";

const GreenVilla = () => {
  return (
    <div className="greenvilla">
      <p>Grogious Home For SaleIn GreenVille</p>
      <div className="greenVilla-content">
        <img src={person} alt="person" />
        <h6>
          Martin Miller <br /> Our Agent
        </h6>
        <button>Discover More!</button>
      </div>
    </div>
  );
};

export default GreenVilla;

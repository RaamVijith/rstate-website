import React from "react";
import "../styles/pages/BestPlaces.css";
import img1 from "../Media/Image_1-300x197.jpg";
import img2 from "../Media/Image_2-300x197.jpg";
import img3 from "../Media/Image_3-300x197.jpg"

const BestPlaces = () => {
  return (
    <section id="luxury" className="best-places">
      <h1>Searching For The Best Places?</h1>
      <p>Handpicked properties by our agents</p>
      <div className="content-list">
        <div className="content-inside">
          <img src={img1} alt="image" />
          <div className="content1">
            <h6>Historical Family Villa Rio</h6>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/013/743/771/small/five-stars-rating-icon-png.png" />
            <h5>$500,000</h5>
          </div>
          <div className="content2">
            <div className="content2-1">
              <p>BEDROOM:</p>
              <p>7Rooms</p>
            </div>
            <div className="content2-1">
              <p>SQURE FEET:</p>
              <p>3226</p>
            </div>
            <div className="content2-1">
              <p>LOCATION:</p>
              <p>89th street, London</p>
            </div>
          </div>
        </div>

        <div className="content-inside">
          <img src={img2} alt="image" />
          <div className="content1">
            <h6>Historical Family Villa Rio</h6>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/013/743/771/small/five-stars-rating-icon-png.png" />
            <h5>$500,000</h5>
          </div>
          <div className="content2">
            <div className="content2-1">
              <p>BEDROOM:</p>
              <p>7Rooms</p>
            </div>
            <div className="content2-1">
              <p>SQURE FEET:</p>
              <p>3226</p>
            </div>
            <div className="content2-1">
              <p>LOCATION:</p>
              <p>89th street, London</p>
            </div>
          </div>
        </div>

        <div className="content-inside">
          <img src={img3} alt="image" />
          <div className="content1">
            <h6>Historical Family Villa Rio</h6>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/013/743/771/small/five-stars-rating-icon-png.png" />
            <h5>$500,000</h5>
          </div>
          <div className="content2">
            <div className="content2-1">
              <p>BEDROOM:</p>
              <p>7Rooms</p>
            </div>
            <div className="content2-1">
              <p>SQURE FEET:</p>
              <p>3226</p>
            </div>
            <div className="content2-1">
              <p>LOCATION:</p>
              <p>89th street, London</p>
            </div>
          </div>
        </div>        
      </div>
      <button>LOAD MORE</button>
    </section>
  );
};

export default BestPlaces;

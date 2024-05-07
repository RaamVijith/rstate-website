import React from "react";
import "../styles/pages/EstateDemo.css";
import imgNo1 from "../Media/Point.png";
import imgNo2 from "../Media/Point-1.png";
import imgNo3 from "../Media/Point-2.png"
import imgNo4 from "../Media/Point-3.png"


const EstateDemo = () => {
  return (
    <section className="estate-demo">
      <h1>Eye Catching XStore Real Estate Demo</h1>
      <div className="estateDemo-content">
        <div className="estateDemo-content-inside ">
          <img src={imgNo1} />
          <h5>Develop Object</h5>
          <p>
            Vestila vocaniaaruc null.calss adspt nehara Vestila vocaniaaruc
            null.calss adspt nehara ltr toront nehe manh.
          </p>
        </div>

        <div className="estateDemo-content-inside ">
          <img src={imgNo2} />
          <h5>Determinde Resource</h5>
          <p>
            Vestila vocaniaa pt nehara Vestila vocaniaaruc
            null.calss adspt nehara ltr toront nehe manh.
          </p>
        </div>

        <div className="estateDemo-content-inside ">
          <img src={imgNo3} />
          <h5>Grate A Timeline</h5>
          <p>
            Vestila vocaniaaruc null.calss adspt iaaruc
            null.calss adspt nehara ltr toront nehe manh.
          </p>
        </div>

        <div className="estateDemo-content-inside ">
          <img src={imgNo4} />
          <h5>Finalize Plane</h5>
          <p>
            Vestila vocaniaaruc nsa saks iimd mmanu ull.calss adspt nehara Vestila vocaniaaruc
            null.calss adspt nehara ltr toront nehe manh.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EstateDemo;

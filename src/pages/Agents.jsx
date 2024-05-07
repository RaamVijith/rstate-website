import React from 'react';
import "../styles/pages/Agents.css";
import img1 from '../Media/Photo.jpg';
import img2 from '../Media/Photo-1.jpg';
import img3 from '../Media/Photo-2.jpg';

const Agents = () => {
  return (
    <section className="agents">
      <h1>Agents Make the Diffrents</h1>

      <div className="agents-content-list">
        <div className="agents-content-inside">
          <img src={img1} alt="image" />
          <div className="agents-content1">
            <h6>Trevor Walsh</h6>
            <h5>Commercial Broker</h5>
            <img src="https://t3.ftcdn.net/jpg/07/64/05/40/360_F_764054024_qHeCOH7c9GhshVf0LGVpU8IJK45K9axT.jpg" />
            <p>There are many variation of passanger oftn ispm available majority to suffer.</p>
          </div>        
        </div>

        <div className="agents-content-inside">
          <img src={img2} alt="image" />
          <div className="agents-content1">
            <h6>Trevor Walsh</h6>
            <h5>Commercial Broker</h5>
            <img src="https://t3.ftcdn.net/jpg/07/64/05/40/360_F_764054024_qHeCOH7c9GhshVf0LGVpU8IJK45K9axT.jpg" />
            <p>There are many variation of passanger oftn ispm available majority to suffer.</p>
          </div>        
        </div>

        <div className="agents-content-inside">
          <img src={img3} alt="image" />
          <div className="agents-content1">
            <h6>Trevor Walsh</h6>
            <h5>Commercial Broker</h5>
            <img src="https://t3.ftcdn.net/jpg/07/64/05/40/360_F_764054024_qHeCOH7c9GhshVf0LGVpU8IJK45K9axT.jpg" />
            <p>There are many variation of passanger oftn ispm available majority to suffer.</p>
          </div>        
        </div>      
         
      </div>
    </section>
  )
}

export default Agents
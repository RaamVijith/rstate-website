import React from 'react'
import "../styles/pages/Blogs.css";
import img1 from '../Media/Image_6-300x197.jpg';
import img2 from '../Media/Image_2-300x197.jpg';
import img3 from '../Media/Image_3-300x197.jpg';

const Blogs = () => {
  return (
    <section id='Blog' className="blogs">
      <h1>Our Blogs</h1>

      <div className="blogs-content-list">
        <div className="blogs-content-inside">
          <img src={img1} alt="image" />
          <div className="blogs-content1">
            <h6>Ten quick trips about business</h6>
            <p>june 8, 2024</p>
            <p>There are many variation of passanger oftn ispm available majority to suffer.</p>
          </div>        
        </div>

        <div className="blogs-content-inside">
          <img src={img2} alt="image" />
          <div className="blogs-content1">
            <h6>Learn the truth real estate</h6>
            <p>june 8, 2024</p>
            <p>There are many variation of passanger oftn ispm available majority to variation of passanger oftn ispm available majority to suffer.</p>
          </div>        
        </div>

        <div className="blogs-content-inside">
          <img src={img3} alt="image" />
          <div className="blogs-content1">
            <h6>Skils learn in real estate</h6>
            <p>june 8, 2024</p>
            <p>There are many variation of passanger oftn of passanger oftn ispm available majority to suffer.</p>
          </div>        
        </div>
         
      </div>
    </section>
  )
}

export default Blogs
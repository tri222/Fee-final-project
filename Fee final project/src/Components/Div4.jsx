import React from 'react'
import { useState } from 'react'
import '../Css/Div4.css'
const Div4 = ({ bikeImages, buttonLabels }) => {
  return (

<>
<div id='services' className="container-4">
<div className="circle">
  <div className="circle-1">
    <img src="images/circle image bg-4.png" />
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores dolorem
      perspiciatis soluta quia dolor, voluptate molestiae fugiat deleniti esse
      ipsum temporibus debitis commodi hic dolore recusandae modi ipsa, nemo
      eaque! Similique possimus deserunt eos quas! Fugit est beatae expedita at,
      doloribus excepturi, saepe commodi sapiente, quis cumque sequi!
    </p>
    <h2>OUR CUSTOMERS ARE ENJOYING</h2>
    <h3>our customers are enjoying</h3>
  </div>
  <div className="circle-2">
    <img src="images/circle image bg-4.png" />
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores dolorem
      perspiciatis soluta quia dolor, voluptate molestiae fugiat deleniti esse
      ipsum temporibus debitis commodi hic dolore recusandae modi ipsa, nemo
      eaque! Similique possimus deserunt eos quas! Fugit est beatae expedita at,
      doloribus excepturi, saepe commodi sapiente, quis cumque sequi!
    </p>
    <h2>OUR CUSTOMERS ARE ENJOYING</h2>
    <h3>our customers are enjoying</h3>
  </div>
</div>

      <div id='listings' className="img">
        <div className="left-arrow-2">
          <img src="images/left arrow.png" />
        </div>
        <div className="right-arrow-2">
          <img src="images/right arrow.png" />
        </div>
      </div>
    </div>
    <div className="container-5">
      <h2>
        Lorem ipsum is simply dummy text of the printing
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio perspiciatis autem esse illum minima minus nam unde labore, doloribus, adipisci possimus. Laudantium sapiente laboriosam distinctio, harum quibusdam magnam consectetur amet corrupti ex facilis officia? Ut odio ipsa iusto .
      </p>
      <div className="bike-box">
        <div className="arrow-l">
          <img src="images/left arrow.png" alt="Left Arrow" />
        </div>
        {bikeImages.map((src, index) => (
          <img key={index} className="bike-img" src={src} alt={`Bike ${index + 1}`} />
        ))}
        <div className="arrow-r">
          <img src="images/right arrow.png" alt="Right Arrow" />
        </div>
      </div>
      <div className="btn-bike">
        {buttonLabels.map((label, index) => (
          <button key={index} className={`bt-${index + 1}`}>
            {label}
          </button>
        ))}
      </div>
    </div>
</>

  );
};

export default Div4;

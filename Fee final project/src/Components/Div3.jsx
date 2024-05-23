import React from 'react'
import { useState } from 'react'
import '../Css/Div3.css'
const Div3 = ({ para1Heading, para1Text, para1ButtonLabel, para2Heading, para2Text, para2ButtonLabel }) => {
  return (
    <>
<>
<div id='about' className="red-box">
      <img
        className="img-2"
        src="images/Rectangle 1.png"
      />
      <section>
        <div className="top-img">
          <img src="images/cont-2 bg-img.png" />
        </div>
        <div className="bottom-img">
          <img src="images/cont-2 bg-img.png" />
        </div>
      </section>
      <div className="right-arrow">
        <img src="images/right arrow.png" />
      </div>
      <div className="left-arrow">
        <img src="images/left arrow.png" />
      </div>
      <h2>
        lorem ipsum is simpuly dummy text
      </h2>
      <h3>
        our customers our enjoying
      </h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem vitae cumque id, iste quae voluptatibus ea magnam quidem sint voluptas corrupti ratione harum ex.Lorem ipsum dolor sit, amet consectetur adipisicing .
      </p>
      <button>
        Learn More
      </button>
    </div>
    <h1>
      Lorem ipsum dolor sit amet consectetur.
    </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ipsam dolore aliquam. Rerum quisquam atque consectetur qui ad perferendis. Molestias a temporibus vitae suscipit ad. Perferendis aspernatur odio mollitia cupiditate explicabo consectetur eius labore molestias consequatur assumenda saepe hic beatae tempore aperiam, ut culpa cumque est rerum ab!
    </p>
    <div id='offer' className="container-3">
      <div className="flex-img">
        <img
          className="img1"
          src="images/bike-1.png"
        />
        <img
          className="img2"
          src="images/bike-2.png"
        />
        <img
          className="img3"
          src="images/bike-3.png"
        />
      </div>
      <div className="paragraph">
      <div className="para">
        <h2>{para1Heading}</h2>
        <p>{para1Text}</p>
        <button>{para1ButtonLabel}</button>
      </div>
      <div className="para-2">
        <h2>{para2Heading}</h2>
        <p>{para2Text}</p>
        <button>{para2ButtonLabel}</button>
      </div>
    </div>
    </div>
</>

    </>
  )
}

export default Div3

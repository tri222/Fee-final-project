import { useState } from 'react'
import './App.css';
import './Css/responsive.css'
import Div1 from './Components/Div1';
import Div2 from './Components/Div2';
import Div3 from './Components/Div3';
import Div4 from './Components/Div4';
import Div5 from './Components/Div5';
import Footer from './Components/Footer';
function App() {
  const bikeImages = [
    "images/bike-1 bg-5.png",
    "images/bike-2 bg-5.png",
    "images/bike-3 bg-5.png",
    "images/bike-4 bg-5.png"
  ];

  const buttonLabels = [
    "click here",
    "click here",
    "click here",
    "click here"
  ];
  return (
   <>
   


<div>
<Div1/>
<Div2/>
<div className="container-2">
<Div3
 para1Heading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quisquam!"
 para1Text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero accusantium aut corporis provident perspiciatis natus temporibus sit excepturi, voluptatem dignissimos!"
 para1ButtonLabel="Learn More"
 para2Heading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quisquam!"
 para2Text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero accusantium aut corporis provident perspiciatis natus temporibus sit excepturi, voluptatem dignissimos!"
 para2ButtonLabel="Learn more"/>
<Div4 bikeImages={bikeImages} buttonLabels={buttonLabels} />
<Div5/>
<Footer/>
    
    
  </div>
</div>

   </>
  );
}

export default App;


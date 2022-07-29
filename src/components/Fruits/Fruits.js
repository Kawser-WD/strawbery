import React from 'react';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Image1 from '../Images/image1.jpg'
import Image2 from '../Images/image2.jpg'
import Image3 from '../Images/image3.jpg'
import "./Fruits.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const Fruits = () => {
    return (
        <div>
             <div className='d-flex justify-content-center'>
             <button className='title'>Download to setup your carousel in react</button>
             </div>
      <div className="fruits">
        <Carousel itemsToShow={1}  >
          <Item>
            <img src={Image1} alt=""/>
          </Item>
          <Item>
            <img src={Image2} alt=""/>
          </Item>
          <Item>
            <img src={Image3} alt=""/>
          </Item>
          <Item>
            <img src={Image1} alt=""/>
          </Item>
        </Carousel>
      </div>
        </div>
    );
};

export default Fruits;
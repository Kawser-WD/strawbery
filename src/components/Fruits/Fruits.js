import React from 'react';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Image1 from '../Images/image1.jpg'
import Image2 from '../Images/image2.jpg'
import Image3 from '../Images/image3.jpg'
import "./Fruits.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1, pagination: false },
  { width: 850, itemsToShow: 1 },
  { width: 1150, itemsToShow: 1, itemsToScroll: 1 },
  { width: 1450, itemsToShow: 1 },
  { width: 1750, itemsToShow: 1 },
]

const Fruits = () => {
    return (
        <div>
             <div className='d-flex justify-content-center'>
             <a href="https://docs.google.com/uc?export=download&id=1IyYvOJjXI7p_T84mAD0FlfCRp_CNfJ5H"><button className='title'>download heier onze seizoensklander</button></a>
             </div>
      <div className="fruits">
        <Carousel breakPoints={breakPoints} >
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
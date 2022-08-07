import React from 'react';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import image1 from './slider under/productfoto-5.jpg'
import image2 from './slider under/productfoto-112.jpg'
import image3 from './slider under/productfoto-114.jpg'
import image4 from './slider under/productfoto-125.jpg'
import image5 from './slider under/productfoto-135.jpg'
import image6 from './slider under/productfoto-24.jpg'
import image7 from './slider under/productfoto-25.jpg'
import image8 from './slider under/productfoto-35.jpg'
import image9 from './slider under/productfoto-4.jpg'
import image10 from './slider under/productfoto-65.jpg'
import image11 from './slider under/productfoto-99.jpg'
import "./Fruits.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, height:600, itemsToShow: 1, itemsToScroll: 1, pagination: false },
  { width: 850, itemsToShow: 1 },
  { width: 1150, itemsToShow: 1, itemsToScroll: 1 },
  { width: 1450, itemsToShow: 1 },
  { width: 1750, itemsToShow: 1 },
]

const Fruits = () => {
    return (
        <div>
             <div className='d-flex justify-content-center'>
             <a href="https://docs.google.com/uc?export=download&id=1IyYvOJjXI7p_T84mAD0FlfCRp_CNfJ5H"><button className='title'>download heier onze seizoenskalender</button></a>
             </div>
      <div className="fruits">
        <Carousel breakPoints={breakPoints} >
          <Item>
            <img src={image1} className="fruits-img" alt=""/>
          </Item>
          <Item>
            <img src={image2} className="fruits-img" alt=""/>
          </Item>
          <Item>
            <img src={image3}  className="fruits-img" alt=""/>
          </Item>
          <Item>
            <img src={image4}  className="fruits-img" alt=""/>
          </Item>
          <Item>
            <img src={image5}  className="fruits-img" alt=""/>
          </Item>
          <Item>
            <img src={image6} className="fruits-img" alt=""/>
          </Item>
          <Item>
            <img src={image7}  className="fruits-img" alt=""/>
          </Item>
          <Item>
            <img src={image8}  className="fruits-img" alt=""/>
          </Item>
          <Item>
            <img src={image9}  className="fruits-img" alt=""/>
          </Item>
          <Item>
            <img src={image10} className="fruits-img" alt=""/>
          </Item>
          <Item>
            <img src={image11}  className="fruits-img" alt=""/>
          </Item>
        </Carousel>
      </div>
        </div>
    );
};

export default Fruits;
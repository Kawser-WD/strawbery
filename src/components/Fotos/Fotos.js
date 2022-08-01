import React from 'react';
import productfoto1 from '../Images/slider under/productfoto-112.jpg' 
import productfoto2 from '../Images/slider under/productfoto-114.jpg' 
import productfoto3 from '../Images/slider under/productfoto-125.jpg' 
import productfoto4 from '../Images/slider under/productfoto-135.jpg' 
import productfoto5 from '../Images/slider under/productfoto-24.jpg' 
import productfoto6 from '../Images/slider under/productfoto-25.jpg' 
import productfoto7 from '../Images/slider under/productfoto-35.jpg' 
import productfoto8 from '../Images/slider under/productfoto-4.jpg' 
import productfoto9 from '../Images/slider under/productfoto-5.jpg' 
import productfoto10 from '../Images/slider under/productfoto-65.jpg' 
import productfoto11 from '../Images/slider under/productfoto-99.jpg' 
import productfoto12 from '../Images/slider under/productfoto-113.jpg' 
import productfoto13 from '../Images/slider under/productfoto-29.jpg' 
import productfoto14 from '../Images/slider under/1.jpg' 
import './Fotos.css'
const Fotos = () => {
    return (
       <section>
        <div className='container foto'>
            <div className='row g-0'>
                <div className='col-lg-4 col-md-4 col-6'>
                    <img src={productfoto1} className="product-foto " alt=""/>
                    </div>
                <div className='col-lg-4 col-md-4 col-6'>
                <img src={productfoto2} className="product-foto  " alt=""/>
                    </div>
                <div className='col-lg-4 col-md-4 col-6'>
                <img src={productfoto3} className="product-foto  " alt=""/>
                    </div>
                <div className='col-lg-4 col-md-4 col-6'>
                <img src={productfoto4} className="product-foto  " alt=""/>
                    </div>
                <div className='col-lg-4 col-md-4 col-6'>
                <img src={productfoto5} className="product-foto  " alt=""/>
                    </div>
                <div className='col-lg-4 col-md-4 col-6'>
                <img src={productfoto6} className="product-foto  " alt=""/>
                    </div>
                <div className='col-lg-4 col-md-4 col-6'>
                <img src={productfoto7} className="product-foto  " alt=""/>
                    </div>
                <div className='col-lg-4 col-md-4 col-6'>
                <img src={productfoto8} className="product-foto  " alt=""/>
                    </div>
                <div className='col-lg-4 col-md-4 col-6'>
                <img src={productfoto9} className="product-foto  " alt=""/>
                    </div>
                <div className='col-lg-4 col-md-4 col-6'>
                <img src={productfoto10} className="product-foto  " alt=""/>
                    </div>
                <div className='col-lg-4 col-md-4 col-6'>
                <img src={productfoto11} className="product-foto  " alt=""/>
                    </div>
                <div className='col-lg-4 col-md-4 col-6'>
                <img src={productfoto12} className="product-foto  " alt=""/>
                    </div>
                </div>
                </div>
       </section>
    );
};

export default Fotos;
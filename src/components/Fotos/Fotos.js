import React from 'react';
import productfoto1 from '../Images/FOTOS/Pro 1.jpg'; 
import productfoto2 from '../Images/FOTOS/Pro 2.jpg'; 
import productfoto3 from '../Images/FOTOS/Pro 3.jpg'; 
import productfoto4 from '../Images/FOTOS/Pro 4.jpg'; 
import productfoto5 from '../Images/FOTOS/Pro 5.jpg'; 
import productfoto6 from '../Images/FOTOS/Pro 6.jpg'; 
import productfoto7 from '../Images/FOTOS/Pro 7.jpg'; 
import productfoto8 from '../Images/FOTOS/Pro 8.jpg'; 
import productfoto9 from '../Images/FOTOS/Pro 9.jpg'; 
import productfoto10 from '../Images/FOTOS/Pro 10.jpg'; 
import productfoto11 from '../Images/FOTOS/Pro 11.jpg'; 
import productfoto12 from '../Images/FOTOS/Pro 12.jpg'; 

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
import React from 'react';
import image from '../../Images/slider top/productfoto-69.jpg'
import './Factory.css'
const Factory = () => {
    return (
       
             <div  className='factory'>
             <div className='container'
            
             >
                <div className='row factory-row'>
                <div className='col-lg-6 col-md-6 col-12'>
                        <h4 className='factory-title mt-5'>Vroegmarkt/Veiling</h4>
                        <p className='factory-text mt-4'>Dagelijks komen er verse producten
                            aangeleverd via veiling Belorta, Hoogstraten,
                            Reo veiling & via import verschillende landen.</p>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <img src={image} className="factory-img img-fluid" alt=""/>
                    </div>
                </div>
            </div>
             </div>
    );
};

export default Factory;
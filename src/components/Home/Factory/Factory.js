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
                        <h4 className='factory-title mt-3'>Vroegmarkt/Veiling</h4>
                        <p className='factory-text mt-4'>Elke week gaan wij met de vrachtwagen
                        2 keer naar de vroegmarkt in Brussel.
                        De andere dagen gaan we naar de veiling Reo
                        in Roeselare om verse producten binnen te halen.
                        Zo kunnen wij ook 7/7 verse producten leveren
                        aan onze tevreden klanten.</p>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <img src={image} className="factory-img" alt=""/>
                    </div>
                </div>
            </div>
             </div>
    );
};

export default Factory;
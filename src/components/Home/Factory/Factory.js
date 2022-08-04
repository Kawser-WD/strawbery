import React from 'react';
import image from '../../Images/slider top/productfoto-69.jpg'
import './Factory.css'
const Factory = () => {
    return (
       
             <div  className='factory'>
             <div className='container'
            
             >
                <div className='row'>
                <div className='col-lg-6 col-md-6 col-12 mt-4'>
                        <h4 className='factory-title'>Vroegmarkt in Brussel</h4>
                        <p className='factory-text mt-4'>Reeds tientallen jaren heten wij iedereen welkom in onze handel . Ons bedrijf is  gevestigd in Blankenberge. Wij leveren degelijks 7 op 7 verse kawaliteitsvolle groenten en fruit indien gewenst ook gesneden. Onze klanten bestaan Voornamelijk uit horeca, grootkeukens en voedingswinkels.</p>
                        <p className='factory-text'>Ann, wim en het team.</p>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <img src={image} style={{height:'300px', width:'100%'}} alt=""/>
                    </div>
                </div>
            </div>
             </div>
    );
};

export default Factory;
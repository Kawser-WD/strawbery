import React from 'react';
import factoryImage from '../../Images/Schermafbeelding 2022-07-30 om 17.12.20.png'
import './About.css'
const About = () => {
    return (
        <div className='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-12 about-row'>
                        <img src={factoryImage} className="about-img" alt=""/>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12 mt-3 about-column'>
                        <h4 className='about-title'>Welcome bij Groenten en Fruithandle <br/>Ann en wim!</h4>
                        <p className='about-text mt-2'>Reeds tientallen jaren heten wij iedereen welkom in onze handel . Ons bedrijf is  gevestigd in Blankenberge. Wij leveren degelijks 7 op 7 verse kawaliteitsvolle groenten en fruit indien gewenst ook gesneden. Onze klanten bestaan Voornamelijk uit horeca, grootkeukens en voedingswinkels.</p>
                        <p className='about-text mt-0'>Ann, wim en het team.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
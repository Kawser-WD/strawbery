import React from 'react';
import factoryImage from '../../Images/Schermafbeelding 2022-07-30 om 17.12.20.png'
import './About.css'
const About = () => {
    return (
        <div className='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-12 about-row'>
                        <img src={factoryImage} className="about-img img-fluid" alt=""/>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12 mt-3 about-column'>
                        <h4 className='about-title'>Welkome bij Groenten en Fruithandel <br/>Ann & wim, Guillaume</h4>
                        <p className='about-text mt-4'>Reeds tientallen jaren heten wij iedereen
                            welkom in onze handel. Ons bedrijf is gevestigd
                            in Blankenberge Steenovenstraat 8/10.
                            Wij leveren dagelijks 7 op 7 verse
                            kwaliteitsvolle groenten en fruit, indien gewenst
                            ook gesneden. Onze klanten bestaan voornamelijk
                            uit horeca, grootkeukens, voedingswinkels.
                            Als ook verkoop aan particulier.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
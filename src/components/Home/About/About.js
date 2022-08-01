import React from 'react';
import factoryImage from '../../Images/Schermafbeelding 2022-07-30 om 17.12.20.png'
import './About.css'
const About = () => {
    return (
        <div className='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <img src={factoryImage} style={{height:'280px', width:'100%'}} alt=""/>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12 mt-3'>
                        <h4>Welcome bij Groenten en Fruithandle <br/>Ann en wim!</h4>
                        <p>Rapid technology development in controlled environment (CE) plant production has been applied to a large variety of plants. In recent years, strawberries have become a popular fruit for CE production because of their high economic and nutritional values.</p>
                        <p>Ann, wim en het team.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
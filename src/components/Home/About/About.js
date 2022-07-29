import React from 'react';
import factoryImage from '../../Images/factory.jpg'
const About = () => {
    return (
        <div>
            <div className='container' style={{marginTop:'100px', marginBottom:'100px',}}>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <img src={factoryImage} style={{height:'300px', width:'100%'}} alt=""/>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12 mt-4'>
                        <h4>Welcome bij Groenten en Fruithandle <br/>Ann en wim!</h4>
                        <p>Rapid technology development in controlled environment (CE) plant production has been applied to a large variety of plants. In recent years, strawberries have become a popular fruit for CE production because of their high economic and nutritional values.</p>
                        <br/>
                        <p>Ann, wim en het team.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
import React from 'react';
import image from '../../Images/images (8).jpg'
const Factory = () => {
    return (
        <div style={{backgroundColor:'#EAEAEA', height:'500px'}} >
             <div className='container' style={{paddingTop:'100px'}}>
                <div className='row'>
                <div className='col-lg-6 col-md-6 col-12 mt-4'>
                        <h4>Vroegmarkt in Brussel</h4>
                        <p>Rapid technology development in controlled environment (CE) plant production has been applied to a large variety of plants. In recent years, strawberries have become a popular fruit for CE production because of their high economic and nutritional values.</p>
                        <br/>
                        <p>Ann, wim en het team.</p>
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
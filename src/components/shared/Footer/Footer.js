import React from 'react';
import facebook from '../../Images/facebook-app-symbol.png'
import instagram from '../../Images/instagram.png'
import img from '../../Images/img.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-main'>
      
            <div className='footer'>
                <div className='container'>
                    <div className='row text-white'>
                        <div className='col-lg-3 col-md-3 col-6'>
                            <h2 style={{marginTop:'20px'}}>Pluk de dag!</h2>
                        </div>
                        <div className='col-lg-3 col-md-3 col-6'>
                            <p>T. 050 5416 5444</p>
                            <p>Wim. 050 5416 5444</p>
                            <p>Ann. 050 5416 5444</p>
                        </div>
                        <div className='col-lg-3 col-md-3 col-6'>
                            <p>Stenoverstet 8-10</p>
                            <p>5444 Blenkenberg</p>
                            <p>ann@gmail.com</p>
                        </div>
                        <div className='col-lg-3 col-md-3 col-6' style={{marginTop:'10px', color:'#fff'}}>
                            <img src={instagram} style={{height:'50px', width:'50px'}} alt=""/>
                            <img src={facebook} style={{height:'50px', width:'50px'}} alt=""/>
                        </div>
                    </div>
                </div>
        </div>
        <div id='image'>
        <img src={img} style={{width:'100%'}} alt=""/>
        </div>
        <div className='copyright d-flex justify-content-center'>
        <p>Copyright Grothendal Tanghe 2022- web design by wlampert</p>
       </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navigation.css'
import Logo from '../../Images/ANN-&-WIM-TANGHE-LOGO.png';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
    <div>
              <nav class="navbar navbar-expand-md">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className='navbar-toggler-icon'>
            <FontAwesomeIcon style={{color:'#BD2322'}} icon={faBars} />
            </span>
          </button>
          <a class="navbar-brand" href="#">
            <img src={Logo} alt=""/>
          </a>
          <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
            <ul class="navbar-nav">
              <li class="nav-item">
               <Link to="/" style={{textDecoration:'none'}}>
               <a class="nav-link" aria-current="page" href="#">Home</a>
               </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">over ons</a>
              </li>
              <li class="nav-item">
                <Link to="/fotos" style={{textDecoration:'none'}}><a class="nav-link" href="#" tabindex="-1" aria-disabled="true">foto's</a></Link>
              </li>
              <li class="nav-item">
               <Link to="/contact" style={{textDecoration:'none'}} >
               <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">contact</a>
               </Link>
              </li>
              <li class="nav-item">
                <Link to="/bestelonline" style={{textDecoration:'none'}}>
                <a class="nav-link shopping" href="#" tabindex="-1" aria-disabled="true"><FontAwesomeIcon style={{color:'#fff'}} icon={faCartShopping} />  Bestel online</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
       <div className='headline'>
       <p className='headline-text'>Wij leveren dagelijks 7 op 7 verse kawalitietvolle groeten fruit</p>
   </div>
    </div>
    );
};

export default Navigation;
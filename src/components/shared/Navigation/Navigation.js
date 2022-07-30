import React from 'react';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navigation.css'

const Navigation = () => {
    return (
        <nav class="navbar navbar-expand-md">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className='navbar-toggler-icon'>
            <FontAwesomeIcon style={{color:'#BD2322'}} icon={faBars} />
            </span>
          </button>
          <a class="navbar-brand" href="#">Strawberry</a>
          <div class="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">over ons</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">foto's</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link shopping" href="#" tabindex="-1" aria-disabled="true"><FontAwesomeIcon style={{color:'#fff'}} icon={faCartShopping} />  Bestel online</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navigation;
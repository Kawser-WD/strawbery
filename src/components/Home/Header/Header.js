import React from 'react';
import slider1 from '../../Images/slider top/1.jpg';
import slider2 from '../../Images/slider top/productfoto-113.jpg';
import slider3 from '../../Images/slider top/productfoto-29.jpg';
import slider4 from '../../Images/slider top/productfoto-58.jpg';
import slider5 from '../../Images/slider top/productfoto-69.jpg';
import './Header.css';



const Header = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 5"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={slider1} class="d-block w-100" style={{height:'550px'}} alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={slider2} class="d-block w-100" style={{height:'550px'}} alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={slider3} class="d-block w-100" style={{height:'550px'}} alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={slider4} class="d-block w-100" style={{height:'550px'}} alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={slider5} class="d-block w-100" style={{height:'550px'}} alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
        </div>
    );
};

export default Header;
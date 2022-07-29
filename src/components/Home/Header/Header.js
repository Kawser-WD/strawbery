import React from 'react';
import Image1 from '../../Images/image1.jpg'
import Image2 from '../../Images/image2.jpg'
import Image3 from '../../Images/image3.jpg'
import './Header.css';



const Header = () => {
    return (
        <div>
            <div className='headline'>
                <p className='headline-text'>Wij leveren dagelijks 7 op 7 verse kawalitietvolle groeten fruit</p>
            </div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={Image1} class="d-block w-100" style={{height:'550px'}} alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={Image2} class="d-block w-100" style={{height:'550px'}} alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={Image3} class="d-block w-100" style={{height:'550px'}} alt="..."/>
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
import React from 'react';
import {Link} from 'react-router-dom'
import pic1 from '../static/img/pic1.png'
import pic2 from '../static/img/pic2.jpg'
import pic3 from '../static/img/pic3.png'
import '../static/Carousel.css'

const Carousel = () => {
  return (
    <div id="Carousel">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="2000">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100" src={pic1} alt="First slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={pic2} alt="Second slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={pic3} alt="Third slide"/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
  );
}

export default Carousel;

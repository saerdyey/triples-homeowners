import React from 'react';
import {Link} from 'react-router-dom'
import pic1 from '../static/img/img1.jpg'
import pic2 from '../static/img/img2.jpg'
import pic3 from '../static/img/img3.jpg'
import pic4 from '../static/img/img4.jpg'
import pic5 from '../static/img/img5.jpg'
import pic6 from '../static/img/img6.jpg'
import '../static/Carousel.css'

const Carousel = () => {
  return (
    <div id="Carousel">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="4000">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
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
                <div class="carousel-item">
                <img class="d-block w-100" src={pic4} alt="Forth slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={pic5} alt="Fifth slide"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={pic6} alt="Sixth slide"/>
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

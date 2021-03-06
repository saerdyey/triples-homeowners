import React, {useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom'
import '../static/Home.css'

import pic1 from '../static/img/img4.jpg'
import pic2 from '../static/img/img9.jpg'
import pic3 from '../static/img/img5.jpg'

import Carousel from './Carousel'

function Home() {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const history = useHistory();
  return (
    <div id="Home">
        <Carousel/>
        <div className="introduction">
          <div className="wrapper">
            <div className="introduction-content">
              <h1>SSS North</h1>
              <h1>Fairview Homes</h1>
              <p>will continue to be a world class village and a model of peaceful life community</p>
              <button className="mv-btn" onClick={() => {
                    history.push('/about-us')
                  }}>Mission and Vision</button>
            </div>
          </div>
        </div>
        <div className="brief-infos">
          <div className="wrapper">
            <div className="cards-container">
              <div className="card">
              <img src={pic1} alt=""/>
                <h3>About Us</h3>
                <p>TripleS is a seventy-seven (20) hectare residential village developed by the SSS (Social Security System)
                every street to be found there is named after the names of their seniors and on how do they work,
                moreover most people lived in SSS village are the ones who worked in SSS. within the general vicinity of
                gated residential village, &amp; proximal to upscale commercial centers, near educational institutions, modern
                hospital facilities, air-continues churches, street/home food restaurants &amp; cafès, &amp; other institutional
                developments.</p>
                  <button className="mv-btn" onClick={() => {
                    history.push('/about-us')
                  }}>Read More</button>
              </div>
              <div className="card">
              <img src={pic2} alt=""/>
                <h3>Facilities</h3>
                <p>Clubhouse Lanai A favorite events place for birthdays, weddings, debuts, baptisms and corporate parties, this fully air-conditioned Lanai hall has an exquisitely-designed and versatilely-modern interiors and can accommodate 250 to 300 persons. The whole clubhouse and the entire park are Wi-Fi enabled zone.</p>
                  <button className="mv-btn" onClick={() => {
                    history.push('/about-us')
                  }}>Read More</button>
              </div>
              <div className="card">
                <img src={pic3} alt=""/>
                <h3>Contact Us</h3>
                <p>Contact our ADMIN OFFICE at 8637-3311 or 8637-3399.</p>
                  <button className="mv-btn" onClick={() => {
                    history.push('/contact-us')
                  }}>Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="location">
          <div className="wrapper">
          <div className="card">
            <h2>Location</h2>
            <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.111246200791!2d121.05900891437031!3d14.706300378421348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b0941a0df48f%3A0x295e10fe8bd7eb81!2sSSS%20North%20Fairview%20Homes!5e0!3m2!1sen!2sph!4v1612904367485!5m2!1sen!2sph"></iframe>
            </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;

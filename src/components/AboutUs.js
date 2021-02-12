import React from 'react';
import pic1 from '../static/img/img1.jpg'
import pic2 from '../static/img/img2.jpg'
import '../static/AboutUs.css'

const AboutUs = () => {
  return (
    <div id="AboutUs">
        <div className="wrapper">
            <h1>About Us</h1>
            <div className="post">
                <img src={pic1} alt=""/>
                <div className="post-text">
                    <p>TripleS is a seventy-seven (20) hectare residential village developed by the SSS (Social Security System)
                    every street to be found there is named after the names of their seniors and on how do they work,
                    moreover most people lived in SSS village are the ones who worked in SSS. within the general vicinity of
                    gated residential village, and proximal to upscale commercial centers, near educational institutions, modern
                    hospital facilities, air-continues churches, street/home food restaurants &amp; cafès, and other institutional
                    developments.
                    </p>
                    
                    
                </div>
            </div>
            <div className="post">
                <img className="imgright" src={pic2} alt=""/>
                <div className="post-text">
                    <p>Inside the village has open parks with abundant luscious tall trees and wide diversity of soothingly delightful
                    greens, offers a variety of modern sports and wellness facilities, and other superb amenities. SSS home village
                    always updates a well-crafted home program for family-oriented and child-friendly activities that helps in
                    creating a permeating ambiance of happiness, goodwill and cohesiveness towards an inspiring community
                    way of life.
                    </p>
                    <p>The entire village is highly secured by licensed security guard.</p>
                    <p>SSS village is a great community that continually enhances the quality of life of its residents amidst a
                    secured, progressive, and family-oriented environment. Truly a marvelous haven for its residents.</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutUs;

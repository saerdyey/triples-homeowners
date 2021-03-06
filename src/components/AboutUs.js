import React, {useEffect} from 'react';
import pic1 from '../static/img/img1.jpg'
import pic2 from '../static/img/img2.jpg'
import pic3 from '../static/img/img3.jpg'
import pic4 from '../static/img/img4.jpg'
import pic5 from '../static/img/img5.jpg'
import pic6 from '../static/img/img6.jpg'
import pic7 from '../static/img/img7.jpg'
import pic8 from '../static/img/img8.jpg'
import pic9 from '../static/img/img9.jpg'
import '../static/AboutUs.css'

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

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
            <div className="card">
                <div className="flex-wrapper">
                <div className="mission-vission">
                    <h2>MISSION</h2>
                    <p>Build a vibrant, premier community that fosters neighborhood pride, encourages cooperation, promotes
                    harmony, and maintains an attractive environment for our homeowners.
                    </p>
                </div>
                <div className="mission-vission">
                    <h2>VISION</h2>
                    <p>SSS village strives to build a sense of community and optimize property values by maintaining and
                    improving parks, parkings, and common areas, resulting in a desirable neighborhood.
                    </p>
                </div>
                </div>
            </div>
            <div className="facilities">
                <h2>FACILITIES</h2>
                <div className="fac-post">
                    <div className="fac-img">
                    <img src={pic3} alt=""/>
                    </div>
                    <div className="fac-caption">
                    Play park for your lovely kids.
                    </div>
                </div>
                <div className="fac-post">
                    <div className="fac-img">
                    <img src={pic4} alt=""/>
                    </div>
                    <div className="fac-caption">
                    Evangelical chucrch to pray.
                    </div>
                </div>
                <div className="fac-post">
                    <div className="fac-img">
                    <img src={pic6} alt=""/>
                    </div>
                    <div className="fac-caption">
                    Clean swimming pool
                    </div>
                </div>
                <div className="fac-post">
                    <div className="fac-img">
                    <img src={pic9} alt=""/>
                    </div>
                    <div className="fac-caption">
                    A place for any kind of events
                    </div>
                </div>
                <div className="fac-post">
                    <div className="fac-img">
                    <img src={pic7} alt=""/>
                    </div>
                    <div className="fac-caption">
                    Badminton Court
                    </div>
                </div>
                <div className="fac-post">
                    <div className="fac-img">
                    <img src={pic8} alt=""/>
                    </div>
                    <div className="fac-caption">
                    Basketball Court
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutUs;

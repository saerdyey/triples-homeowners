import React, {useEffect} from 'react';
import '../static/ContactUs.css'

const ContactUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (
    <div id="ContactUs">
        <div className="wrapper">
            <h1>Contact Us</h1>
            <div className="flex-wrapper">
                <div className="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.111246200791!2d121.05900891437031!3d14.706300378421348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b0941a0df48f%3A0x295e10fe8bd7eb81!2sSSS%20North%20Fairview%20Homes!5e0!3m2!1sen!2sph!4v1612904367485!5m2!1sen!2sph"></iframe>
                    <div className="form-container">
                        <form name="contact" action="/contact-us" method="post">
                            <input type="hidden" name="contact-form" value="contact"/>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                <label htmlFor="contact-fname">First Name</label>
                                <input required type="text" name="first-name" className="form-control" id="contact-fname" placeholder="First Name"/>
                                </div>
                                <div className="form-group col-md-6">
                                <label htmlFor="contact-lname">Last Name</label>
                                <input required type="text" name="last-name" className="form-control" id="contact-lname" placeholder="Last Name"/>
                                </div>
                                <div className="form-group col-md-6">
                                <label htmlFor="contact-email">Email</label>
                                <input required type="email" name="email" className="form-control" id="contact-email" placeholder="First Name"/>
                                </div>
                                
                                
                            </div>
                            <div className="form-group">
                                    <label htmlFor="contact-message">Message</label>
                                    <textarea required
                                    name="message"
                                    className="form-control"
                                    id="contact-message"
                                    rows="10"
                                    cols="30"
                                    placeholder="Type your message here ..."
                                    ></textarea>
                                </div>
                            <button type="submit" className="mv-btn">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="contacts-container">
                    <h4>IMPORTANT NUMBERS</h4>
                    <p className="subt">GM HOME VILLAGE SECURITY:</p>
                    <p>Gate 1: 69696969</p>
                    <p>Gate 1: 69696969</p>
                    <hr/>
                    <p className="subt">Emergency Hotline: 911</p>
                    <p className="subt">Philppine RedCross: 143</p>
                    <p className="subt">MMDA: 136</p>
                    <hr/>
                    <p className="subt">Police Station 5 Fairview:</p>
                    <p>(02) 89354941</p>
                    <p className="subt">QC Fire Station:</p>
                    <p>(02) 8285-6345</p>
                    <p className="subt">QUEZON CITY HALL:</p>
                    <p>(02) 8988-4242</p>
                    <hr/>
                    <p className="subt">HOSPITALS:</p>
                    <p>Commonwealth Hospital:</p>
                    <p>(02) 8930 0000</p>
                    <p>FEUNRMF Hospital:</p>
                    <p>(02) 3427 0213</p>
                    <p>Diliman Doctors Hospital:</p>
                    <p>(02) 8883 6900</p>
                    <hr/>
                    <p className="subt">Brgy North Fairview Hotline:</p>
                    <p>(02) 355-9410</p>
                    <p className="subt">MERALCO: 16211</p>
                    <p className="subt">MANILA WATER: 1627</p>

                </div>
            </div>
            <div className="other-contact-info">

            </div>
            
        </div>
    </div>
  );
}

export default ContactUs;

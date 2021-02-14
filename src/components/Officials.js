import React from 'react';

import '../static/Officials.css';
import avatar from '../static/img/morty-smith.jpg';

const Officials = () => {
    return(
        <div id="Officials">
            <div className="wrapper">
                <h1>OFFICERS</h1>
                <div className="flex-column">
                    <div className="card">
                        <div className="flex-wrapper">
                            <div className="avatar">
                                <img src={avatar} alt=""/>
                            </div>
                            <div className="info">
                                <h2>President</h2>
                                <h4>MANUEL CHUA </h4>
                            </div>
                        </div>        
                    </div>
                    <div className="card">
                        <div className="flex-wrapper">
                            <div className="avatar">
                                <img src={avatar} alt=""/>
                            </div>
                            <div className="info">
                                <h2>Vice President</h2>
                                <h4>MABITZAN MARC</h4>
                            </div>
                        </div>        
                    </div>
                    <div className="card">
                        <div className="flex-wrapper">
                            <div className="avatar">
                                <img src={avatar} alt=""/>
                            </div>
                            <div className="info">
                                <h2>Treasurer</h2>
                                <h4>CARLOS DIMAUNAHAN</h4>
                            </div>
                        </div>        
                    </div>
                    <div className="card">
                        <div className="flex-wrapper">
                            <div className="avatar">
                                <img src={avatar} alt=""/>
                            </div>
                            <div className="info">
                                <h2>Secretary</h2>
                                <h4>KAMILLE APOLINARIO</h4>
                            </div>
                        </div>        
                    </div>
                    <br/>235
                    <h2>Board of Directors Committee</h2>
                    <div className="card">
                        <div className="flex-wrapper">
                            <div className="avatar">
                                <img src={avatar} alt=""/>
                            </div>
                            <div className="info">
                                <h2>Environment &amp; Sanitations</h2>
                                <h4>JETHRO GUITIERREZ</h4>
                            </div>
                        </div>        
                    </div>
                    <div className="card">
                        <div className="flex-wrapper">
                            <div className="avatar">
                                <img src={avatar} alt=""/>
                            </div>
                            <div className="info">
                                <h2>Home Village Secuity</h2>
                                <h4>KRISTEL FAJARDO</h4>
                            </div>
                        </div>        
                    </div>
                    <div className="card">
                        <div className="flex-wrapper">
                            <div className="avatar">
                                <img src={avatar} alt=""/>
                            </div>
                            <div className="info">
                                <h2>Court &amp; Parks Admin</h2>
                                <h4>MANUEL MORALES</h4>
                            </div>
                        </div>        
                    </div>
                    <div className="card">
                        <div className="flex-wrapper">
                            <div className="avatar">
                                <img src={avatar} alt=""/>
                            </div>
                            <div className="info">
                                <h2>Infrastructure &amp; Development</h2>
                                <h4>ANGELA ONG</h4>
                            </div>
                        </div>        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Officials;
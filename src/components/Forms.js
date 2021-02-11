import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import '../static/Forms.css'
import dFile1 from '../static/dFileFolder/dFile1.jpg'

const Forms = () => {

    const history = useHistory()

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const downloadHandler = (str) => {
        history.push(str)
    }

    return (
        <div id="Forms">
            <div className="wrapper">
                <h2>Downloadable Forms</h2>
                <div className="flex-column">
                    <div className="flex-wrapper">
                        <div className="card">
                            <div className="form">
                                <h3>Work Permit</h3>
                                <h4>Requirements</h4>
                                <ul>
                                    <p>shabu</p>
                                    <p>shabu</p>
                                    <p>shabu</p>
                                </ul>
                                <a href={dFile1} download><button className="mv-btn">Download</button></a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="form">
                                <h3>Work Permit</h3>
                                <h4>Requirements</h4>
                                <ul>
                                    <p>shabu</p>
                                    <p>shabu</p>
                                    <p>shabu</p>
                                </ul>
                                <a href={dFile1} download><button className="mv-btn">Download</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-column">
                    <div className="flex-wrapper">
                        <div className="card">
                            <div className="form">
                                <h3>Work Permit</h3>
                                <h4>Requirements</h4>
                                <ul>
                                    <p>shabu</p>
                                    <p>shabu</p>
                                    <p>shabu</p>
                                </ul>
                                <a href={dFile1} download><button className="mv-btn">Download</button></a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="form">
                                <h3>Work Permit</h3>
                                <h4>Requirements</h4>
                                <ul>
                                    <p>shabu</p>
                                    <p>shabu</p>
                                    <p>shabu</p>
                                </ul>
                                <a href={dFile1} download><button className="mv-btn">Download</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forms;
import React from 'react'
import group from '../images/Group.svg'
import App from '../App.css'

export default function LearnMore() {
    return (
        // <>
        // <div className="container-fluid bg-learn-color">
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-4">
                    <h2 className="heading">Save your data storage here.</h2>
                    <p className="info mt-3">Insignia is a data storage area that has been
                        tested for security, so you can store your data here
                        safely but not be afraid of being stolen by others.</p>
                    <button className="btn learn mt-3">Learn More</button>
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-6">
                    <img className="img-fluid img" src={group} alt="" />
                </div>
            </div>
        </div>


        // </>
    )
}
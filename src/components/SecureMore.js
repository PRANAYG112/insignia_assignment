import React from 'react'
import security from '../images/security_SVG 1.svg'
import App from '../App.css'

export default function SecureMore() {
    return (
        <div className="conatiner-fluid secure-bg">
            <div className="container bg-secure">
                <div className="row align-secure">
                    <div className="col-lg-5 security mt-5">
                        <img className="secure img-fluid" src={security} alt="" />
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-4 secure-info mb-5">
                        <h2 className="heading">We are a high-level data storage bank</h2>
                        <p className="info mt-3">The place to store various data that you can access at any time through the internet  and where you can carry it.
                            This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import App from '../App.css'
import mobile from '../images/Phone 1.svg'

export default function DownLoad() {
    return (
        <div className="conatiner-fluid secure-bg">
            <div className="container bg-secure ">
                <div className="row align-secure ">
                    <div className="col-lg-1 "></div>
                    <div className="col-lg-6 secure-info">
                        <h2 className="heading mt-4">We are a high-level data storage bank</h2>
                        <p className="info mt-3">The place to store various data that you can access at any time through the internet  and where you can carry it.
                            This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse.</p>
                        <button className="btn-dark mt-4 download">Download</button>
                    </div>
                    <div className="col-lg-5 security my-2 mb-4">
                        <img className="secure img-fluid" src={mobile} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

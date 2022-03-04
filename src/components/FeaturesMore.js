import React from 'react'
import App from '../App.css'
import clipboard from '../images/ClipboardText.svg'
import print from '../images/Printer.svg'
import secure from '../images/ShieldCheck.svg'


export default function FeaturesMore() {
    return (
        <div className="container features-bg ">
            <div className="conatiner padding-secure mt-4 mb-4">
                <h3 className="heading">Features</h3>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

                    <div className="carousel-inner col-lg-12">
                        <div className="carousel-item active">
                            <span className="search">
                                <img src={clipboard} className="d-block clip" alt="..." />
                                <h4 className="src-data">Search Data</h4>
                                <p className="src-info">Don’t worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                                <h5 className="src-more">Learn More  &nbsp; <i className="arrow">→</i></h5>
                            </span>
                        </div>
                        <div className="carousel-item">
                            <span className="search">
                                <img src={print} className="d-block clip" alt="..." />
                                <h4 className="src-data">Print Out</h4>
                                <p className="src-info">Don’t worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                                <h5 className="src-more">Learn More &nbsp;<i className="arrow">→</i></h5>
                            </span>
                        </div>
                        <div className="carousel-item" >
                            <span className="search">
                                <img src={secure} className="d-block clip" alt="..." />
                                <h4 className="src-data">Security Code</h4>
                                <p className="src-info">Don’t worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                                <h5 className="src-more">Learn More &nbsp;<i className="arrow">→</i></h5>
                            </span>
                        </div>
                    </div> <br /> <br />
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                </div>
            </div>
        </div>
    )
}

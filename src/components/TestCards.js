import React from 'react'
import first from '../images/Ellipse 76.svg'
import second from '../images/Ellipse 76 (1).svg'
import third from '../images/Abstract Circle 1.svg'
import App from '../App.css'

const width = {
    width: "80%",
    height: "100%",
}

const bgcolor = {
    backgroundColor: '#292a2e'
}
const fontstyle = {
    fontSize: "25px"
}
const color = {
    color: '#b61db6'
}


export default function TestCards() {

    return (
        <>
            <div id="carouselExampleIndicators2" className="carousel slide bg-secure" data-ride="carousel" style={bgcolor}>
                <h3 className='heading head-mar mx-5'>Testimonials</h3>
                <div className="carousel-inner  mb-4">


                    <div className="carousel-item active text-light mb-4">
                        <div className="container cardtest d-flex mx-3">
                            <div className="row testbg mt-3 mx-3" style={width}>
                                <div className="cardimg col-lg-3 mt-4">
                                    <img className="width-img" src={first} alt="First slide" />
                                </div>
                                <div className="cardinfo col-lg-6 mt-4">
                                    <h4 className="heading" style={fontstyle}>John Fang </h4>
                                    <span className="d-flex flexli">
                                        <small style={color}>Web Designer</small>
                                        <ul className="d-flex">
                                            <li className="mx-2 licolor"></li>
                                            <li className="mx-2 licolor"></li>
                                            <li className="mx-2 licolor"></li>
                                            <li className="mx-2 licolor"></li>
                                            <li className="mx-2 licolor1"></li>
                                        </ul></span>
                                    <p>Suspendisse ultrices at diam lectus nullam.
                                        Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item  text-light mb-4">
                        <div className="container cardtest d-flex mx-3">
                            <div className="row testbg mt-3 mx-3" style={width}>
                                <div className="cardimg col-lg-3 mt-4">
                                    <img className="width-img" src={second} alt="First slide" />
                                </div>
                                <div className="cardinfo col-lg-6 mt-4">
                                    <h4 className="heading" style={fontstyle}>Jenny Doe</h4>
                                    <span className="d-flex flexli">
                                        <small style={color}>UX Designer</small>
                                        <ul className="d-flex">
                                            <li className="mx-2 licolor"></li>
                                            <li className="mx-2 licolor"></li>
                                            <li className="mx-2 licolor"></li>
                                            <li className="mx-2 licolor"></li>
                                            <li className="mx-2 licolor"></li>
                                        </ul></span>
                                    <p>Suspendisse ultrices at diam lectus nullam.
                                        Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="carousel-indicators mt-5">
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 2"></button>
                </div>
            </div>
            <div className="subscribemail d-flex">
                <div className="subscribe text-light">
                    <h4 className="heading">Subscribe !</h4>
                    <p>Join our newsletter to never miss any latest news.</p>
                </div>
                <div className="emailaddress mx-4 text-light" placeholder='Enter the email'>
                    <form action="">
                        <input className="customize" type="email" placeholder='Enter your e-mail address here' />
                        <input className="btncustom" type="button" value="Join Us" />
                    </form>
                </div>
            </div>

            <hr className="hr" />

            <div className="tryfree d-flex">
                <div className="try text-light">
                    <h4 className="heading">Try for free!</h4>
                    <p>Get limited 1 week free try our features!</p>
                </div>
                <div className="btnfree  text-light d-flex" placeholder='Enter the email'>
                    <button className="free ">Learn More</button>
                    <button className="req">Request Demo<i className="arrow">→</i></button>
                </div>
            </div>
        </>
    )
}

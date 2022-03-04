import React from 'react'
import logo from '../images/Abstract Circle 1.svg'
import facebook from '../images/FacebookLogo.svg'
import twitter from '../images/TwitterLogo.svg'
import instagram from '../images/InstagramLogo.svg'
import SMS from '../images/Union.svg'



export default function Footer() {
    return (
        <footer className="footer">
            <div className="contain">
                <div className="roww">
                    <div className="footer-col text-light">
                        <h4 ><p className='footadd'><img src={logo} alt="" />&nbsp; &nbsp;Insignia</p></h4>
                        <ul className='footadd'>
                            <li></li>
                            <li><p className='footadd'>Insignia Society, 234

                                Bahagia Ave Street
                                PRBW 29281
                            </p></li>
                            <li><p className='footadd'>info@insignia.com
                                1-232-3434 (Main)</p></li>
                            <li><p className='footadd'>© Insignia™, 2020. All rights reserved.</p></li>
                        </ul>
                    </div>
                    <div className="footer-col ">
                        <h4 className='footadd'>About</h4>
                        <ul className='footadd'>
                            <li><p >Profile</p></li>
                            <li><p>Features</p></li>
                            <li><p >Careers</p></li>
                            <li><p >DW News</p></li>
                        </ul>
                    </div>
                    <div className="footer-col ">
                        <h4 className='footadd'>Help</h4>
                        <ul className='footadd'>
                            <li><p>Support</p></li>
                            <li><p >Sign Up</p></li>
                            <li><p>Guide</p></li>
                            <li><p>Reports</p></li>
                            <li><p>QA</p></li>

                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className='footadd'>Social Media</h4>
                        <div className="social-links">
                            <a ><img className='img_hov' src={facebook} alt="facebook" /></a>
                            <a className='img_hov'><img src={twitter} alt="twitter" /></a>
                            <a className='img_hov'><img src={instagram} alt="instagram" /></a>
                            <a className='img_hov'><img src={SMS} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

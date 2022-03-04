import React from 'react'
import logo from '../images/Abstract Circle 1.svg'
import App from '../App.css'


export default function NavBar() {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-style">
                <div className="container-fluid">
                    <a className="navbar-brand in-style" href="#">
                        <img src={logo} alt="" width="40" height="30" className="mx-3 d-inline-block align-text-top" />
                        Insignia
                    </a>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid drop-down-style">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon">X</span>
                            </button>
                            <div className="collapse align-dropdown navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-link mx-2">
                                        <a className="nav-link active" aria-current="page" href="#">About</a>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <a className="nav-link" aria-current="page" href="#">Help</a>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <a className="nav-link" href="#">Features</a>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <a className="nav-link" href="#">Signup</a>
                                    </li>
                                    <li className="nav-item req-style">
                                        <a className="nav-link req-link-style" href="#" id="navbar" aria-expanded="false">Request Demo <i className="arrow">→</i></a>
                                    </li>
                                </ul>

                            </div>

                        </div>

                    </nav>
                </div >
            </nav>
        </div>
    )
}

import React from 'react'
import DownLoad from './components/DownLoad';
import FeaturesMore from './components/FeaturesMore';
import Footer from './components/Footer';
import LearnMore from './components/LearnMore';
import NavBar from './components/NavBar';
import SecureMore from './components/SecureMore';
import TestCards from './components/TestCards';


export default function App() {
  return (
    <>
      <NavBar />
      <div className="container ">
        <div className="container">
          <LearnMore /> <br />
        </div>
        <SecureMore /> <br />
        <div className="container">
          <FeaturesMore /> <br />
        </div>
        <DownLoad /> <br />
        <div className="container">
          <TestCards />
        </div>
        <hr />
      </div>
      <Footer />
    </>
  )
}

// export default images;

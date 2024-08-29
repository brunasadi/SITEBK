import React from 'react';
import Nav from './Nav';
import Carousel1 from './Carousel1';
import Carousel2 from './Carousel2';
import AppDownload from './AppDownload';
import Footer from './Footer';
import './index.css'
function Menu() {
  return (
    <div className="w-100">
      {/* Navbar ocupa toda a largura (col-12) */}
      <div className="row">
        <div className="col-12 p-0">
          <Nav />
        </div>
      </div>

      {/* Primeiro Carousel ocupa toda a largura (col-12) */}
      <div className="row">
        <div className="col-12 p-0">
          <Carousel1 />
        </div>
      </div>

      {/* Segundo Carousel ocupa toda a largura (col-12) */}
      <div className="row">
        <div className="col-12 p-0">
          <Carousel2 />
        </div>
      </div>

      {/* AppDownload ocupa metade da largura (col-6), pode ser ajustado */}
      <div className="row justify-content-center">
        <div className="col-12">
          <AppDownload />
        </div>
      </div>

      {/* Footer ocupa toda a largura (col-12) */}
      <div className="row">
        <div className="col-12 p-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Menu;

import React from 'react';

function Carousel1() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://d3sn2rlrwxy0ce.cloudfront.net/BannerSite_Web_King-em-dobro-sustentação_02.png?mtime=20240805095809&focal=none" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://d3sn2rlrwxy0ce.cloudfront.net/BANNER_SITE_1920x900_Deadpool-HOJE-NOS-CINEMAS.png?mtime=20240725120647&focal=none" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://d3sn2rlrwxy0ce.cloudfront.net/BannerSite_Web_fortalecimento-clube-01.png?mtime=20240805095854&focal=none" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel1;

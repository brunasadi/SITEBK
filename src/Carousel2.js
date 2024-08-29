import React from 'react';

function Carousel2() {
  return (
    <div id="carouselExample2" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://d3sn2rlrwxy0ce.cloudfront.net/acompanhamentos-banner-cardapio-d.jpg?mtime=20210226103906&focal=none" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://d3sn2rlrwxy0ce.cloudfront.net/sobremesa-banner-cardapio-d.jpg?mtime=20210226103341&focal=none" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://d3sn2rlrwxy0ce.cloudfront.net/frango-banner-cardapio-d.jpg?mtime=20210226103541&focal=none" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel2;

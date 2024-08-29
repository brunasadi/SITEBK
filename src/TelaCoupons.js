// src/Coupons.js
import React from 'react';
import './Coupons.css'; // Você pode usar este arquivo CSS para estilizar o componente

const Coupons = () => {
  return (
    <div className="coupons-container">
      <header className="coupons-header">
        <h1>Cupons</h1>
      </header>
      <section className="coupons-list">
        <div className="coupon-item">
          <img src="https://via.placeholder.com/150" alt="Coupon" />
          <h2>Desconto de 20%</h2>
          <p>Use o código: BK20OFF</p>
        </div>
        <div className="coupon-item">
          <img src="https://via.placeholder.com/150" alt="Coupon" />
          <h2>Compre 1, Leve 1</h2>
          <p>Use o código: BKBUY1GET1</p>
        </div>
        {/* Adicione mais cupons conforme necessário */}
      </section>
    </div>
  );
};

export default Coupons;

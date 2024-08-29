import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="top-links">
        <div className="logo">
          <img src="https://www.burgerking.com.br/images/bklogos/BK-novo-logo-eggwhite.svg" alt="Burger King Logo" style={{ height: '50px' }} />
        </div>
        <div className="links">
          <a href="#">App BK</a>
          <a href="#">Sobre o BK</a>
          <a href="#">Trabalhe conosco</a>
          <a href="#">Seja um franqueado</a>
          <a href="#">Relações com investidores</a>
        </div>
      </div>
      <div className="bottom-links">
        <a href="#">Diretrizes de Privacidade de Dados</a>
        <a href="#">Regulamento do Clube BK</a>
        <a href="#">Política de Publicidade Infantil</a>
        <a href="#">Informações Legais</a>
        <a href="#">Opções de Privacidade</a>
      </div>
      <div className="social-media">
        <span>Compartilhe algo delicioso</span>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-facebook-f"></i></a>
      </div>
      <div className="footer-bottom">
        <span>Imagens meramente ilustrativas. Consulte os restaurantes participantes. TM &amp; © 2021 Burger King Corporation. Todos os direitos reservados.</span>
      </div>
    </div>
  );
}

export default Footer;

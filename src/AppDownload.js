import React from 'react';
import imgcel from './imgcl.png';
import './index.css'; // Arquivo CSS adicional para estilizações customizadas

function AppDownload() {
  return (
    <div className="advertisement">
    <div className="phone">
      <img src={imgcel} alt="Clube BK App" />
    </div>
    <div className="text">
      <h1>Baixe nosso App e tenha o BK na palma da sua mão!</h1>
      <div className="stores">
        <img src="https://www.gov.br/pt-br/imagens-de-servicos/apple.png" alt="App Store" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
      </div>
    </div>
  </div>
  );
}

export default AppDownload;

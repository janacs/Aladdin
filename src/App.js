import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-image: url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/Imagem%20palacio.png?raw=true");
  background-position: center;
  height: 100vh;
  text-align: center;
}
`;

const Titulo = styled.h2`
  color: white;
`;

const Aviso = styled.h3`
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`;

function LampadaMagica() {
  const [lampada, setLampada] = useState(false);

  const trocarLampada = () => {
    setLampada(!lampada); // Alterna entre as imagens
  };

  return (
    <main>
      <GlobalStyle />
      <Titulo>"Liberte a magia da programação com a lâmpada de Aladim."</Titulo>
      <Aviso>Clique no lampada e faça um pedido:</Aviso>
      {/* Altera a imagem com base no estado */}
      <img
        src={
          lampada
            ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true"
            : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"
        }
        alt="Lâmpada"
        onClick={trocarLampada}
      />
    </main>
  );
}

export default LampadaMagica;

import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* Importando a fonte Sevillana do Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Sevillana&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Sevillana', cursive;
  font-weight: 400;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  background-image: url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/Imagem%20palacio.png?raw=true");

  @media (max-width: 900px) {
    background-image: url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/imagem%20do%20palacio.png?raw=true");
    background-size: cover;
    background-repeat: no-repeat;
  }
}

main {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
`;

const Titulo = styled.h1`
  color: white;
  width: 100%;
  text-align: center;
  padding: 20px 0;
  font-size: 4rem;
  font-family: "Sevillana", cursive;
  font-weight: 400;

  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
`;

const Botao = styled.button`
  width: 190px;
  height: 50px;
  border-radius: 50px;
  background: #007bff;
  color: white;
  font-family: "Sevillana", cursive;
  font-weight: 400;
  font-size: 24px;

  @media (max-width: 900px) {
    background: #b74794;
  }
`;

const Imagens = styled.img`
  width: 100%;
  max-width: 450px;
  height: auto;

  @media (max-width: 900px) {
    width: 450px;
    height: 500px;
    object-fit: contain;
  }
`;

export default function App() {
  const [lampada, setLampada] = useState(false);
  const trocarLampada = () => {
    setLampada(!lampada);
  };

  return (
    <main>
      <GlobalStyle />
      <Titulo>"Liberte a magia da programação com a lâmpada de Aladdin"</Titulo>
      <Imagens
        src={
          lampada
            ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true"
            : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"
        }
        alt="Lâmpada"
      />
      <Botao onClick={trocarLampada}>Clique Aqui</Botao>
    </main>
  );
}

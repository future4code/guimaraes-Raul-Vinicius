import React, {useState} from "react";
import ListaMatches from "./pages/ListaMatches";
import TelaInicial from "./pages/TelaInicial";
import styled from "styled-components"

const AppContainer = styled.div `
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(#FFC63D, #0030A1);
  min-height: 800px;
`

const App = () => {

  const [tela, setTela] = useState("inicial")

  const trocaTela = () => {

    switch (tela) {
      case "inicial":
        return <TelaInicial irParaListaMatches={irParaListaMatches} />
      case "lista":
        return <ListaMatches irParaTelaInicial={irParaTelaInicial} />
      default:
        return <p>Algo deu errado!</p>
    }
  }

  const irParaTelaInicial = () => {
    setTela("inicial")
  }

  const irParaListaMatches = () => {
    setTela("lista")
  }

  return (
    <AppContainer>
      {trocaTela()}
    </AppContainer>
  );
}

export default App;

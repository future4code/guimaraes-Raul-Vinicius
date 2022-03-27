import React, {useState} from "react";
import ListaMatches from "./pages/ListaMatches";
import TelaInicial from "./pages/TelaInicial";

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
    <div>
      {trocaTela()}
    </div>
  );
}

export default App;

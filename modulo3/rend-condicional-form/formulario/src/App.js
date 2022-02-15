import React from "react";
import Form1 from "./components/Etapa1";
import Form2 from "./components/Etapa2";
import Form3 from "./components/Etapa3";
import ThankYou from "./components/Final";
import styled from "styled-components";

const ConteinerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: center;
  gap: 20px;
`

const StyledButton = styled.button`
  height: 30px;
  width: 120px;
  margin-left: 630px;
`

class App extends React.Component {
  state = {
    etapa: 1,
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Form1 />;

      case 2:
        return <Form2 />;

      case 3:
        return <Form3 />;

      case 4:
        return <ThankYou />;

      default:
        console.log("Finish");
    }
  };

  pularProximaEtapa = () => {
    const etapaAtual = this.state.etapa;
    const nextStep = etapaAtual + 1;
    this.setState({ etapa: nextStep });
  };
  render() {
    return (
      <ConteinerPrincipal>
          {this.renderizaEtapa()}

          <StyledButton onClick={this.pularProximaEtapa}> Próxima etapa</StyledButton>
      </ConteinerPrincipal>
    );
  }
}

export default App;
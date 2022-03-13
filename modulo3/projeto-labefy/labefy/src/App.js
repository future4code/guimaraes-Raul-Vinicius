import React from "react"
import CriarPlaylists from "./components/CriarPlaylists"
import DetalhePlaylist from "./components/DetalhePlaylist"
import ListaPlaylists from "./components/ListaPlaylists"
import styled from "styled-components"
import logo from "./img/logo.png"

const Header = styled.header`
  background-color: #000000;
  display: flex;
  justify-content: space-between;
`
const Logo = styled.img `
  height: 80px;
  margin: 10px 0 10px 20px;
`

const ButtonHeader = styled.button `
  background-color: #28A830;
  color: #ffffff;
  margin: 20px 30px;
  padding: 5px 20px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 10px;
  border-color: green;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export default class App extends React.Component {

  state = {
    tela: "criarPlaylist"
  }

  escolheTela = () => {
    switch(this.state.tela) {
      case "criarPlaylist":
        return <CriarPlaylists/>
      case "listaPlaylists":
        return <ListaPlaylists />
      case "detalhePlaylist":
        return <DetalhePlaylist/>
      default:
        return <p>Nenhuma página foi encontrada.</p>
    }
  }

  render() {
    return (
      <div className="App">
        <Header>
            <Logo src= {logo} />
            <ButtonHeader>LOGIN</ButtonHeader>
          </Header>

          <div>
            {this.escolheTela()}
          </div>
        </div>
      
    )
  }
}



import React from "react"
import CriarPlaylists from "./components/CriarPlaylists"
import DetalhePlaylist from "./components/DetalhePlaylist"
import ListaPlaylists from "./components/ListaPlaylists"
import styled from "styled-components"
import logo from "./img/logo.png"

const ConteinerPai = styled.div `
  display: flex;
  flex-direction: column;
`

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
const Footer = styled.footer `
  background-color: #000000;
`

const TextoFooter = styled.p `
  font-size: 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #ffffff ;
  text-align: center;
`


export default class App extends React.Component {

  state = {
    tela: "criarPlaylist"
  }

  escolheTela = () => {
    switch(this.state.tela) {
      case "criarPlaylist":
        return <CriarPlaylists irListaPlaylists={this.irListaPlaylists} />
      case "listaPlaylists":
        return <ListaPlaylists irCriarPlaylist={this.irCriarPlaylist} />
      case "detalhePlaylist":
        return <DetalhePlaylist irListaPlaylists={this.irListaPlaylists} />
      default:
        return <p>Nenhuma página foi encontrada.</p>
    }
  }

  irCriarPlaylist = () => {
    this.setState({tela: "criarPlaylist"})
  }

  irListaPlaylists = () => {
    this.setState({tela: "listaPlaylists"})
  }

  render() {
    return (
      <ConteinerPai>
        <Header>
            <Logo src= {logo} />
            <ButtonHeader>LOGIN</ButtonHeader>
          </Header>

          <div>
            {this.escolheTela()}
          </div>

          <Footer>
            <TextoFooter>Todos os direitos reservados - &copy; Labefy</TextoFooter>
          </Footer>
        </ConteinerPai>
    )
  }
}



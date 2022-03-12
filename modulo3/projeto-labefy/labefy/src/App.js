import React from "react"
import CriarPlaylists from "./components/CriarPlaylists"
import DetalhePlaylist from "./components/DetalhePlaylist"
import ListaPlaylists from "./components/ListaPlaylists"

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
      <div>
        {this.escolheTela()}
      </div>
    )
  }
}



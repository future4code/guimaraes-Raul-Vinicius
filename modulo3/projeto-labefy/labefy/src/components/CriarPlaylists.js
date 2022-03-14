import React from "react";
import home from "../../src/img/home.png"
import styled from "styled-components";
import axios from "axios";

const Conteiner = styled.div`
    background-color: #28A830;
    display: flex;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const ImgHome = styled.img `
    height: 500px;
    margin-left: 150px;
`
const ConteinerCriar = styled.div `
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 50px;
`

const TituloCriar = styled.p `
    font-size: 40px;
    font-weight: bold;
`

const NomePlaylist = styled.input `
    border-color: 0;
    height: 40px;
    font-size: 20px;
    border-radius: 10px;
`

const DivBotoes = styled.div `
    display: flex;
    justify-content: space-between;
`

const Botoes = styled.button `
    background-color: #000000;
    color: #ffffff;
    padding: 15px 40px;
    font-size: 15px;
    border-radius: 10px;
    border-color: green;
`   


export default class CriarPlaylists extends React.Component {

    state = {
        playlist: ""
    }

    criarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.playlist
        }
        const headers = {
            headers: {
                Authorization: "raul-vinicius-guimaraes"
            }
        }

        axios.post(url,body,headers)
        .then((res)=>{
            alert("Playlist criada com sucesso!")
            this.setState({playlist:""})
        })
        .catch((err)=>{
            alert("Não pode ser criada uma playlist com nome igual.")
            // alert(err.response.data.message)
        })
    }

    handlePlaylist = (event) => {
        this.setState ({playlist: event.target.value})
    }

    render () {
        return (
            <Conteiner>
                <ImgHome src= {home} />

                <ConteinerCriar>

                    <TituloCriar>Crie sua playlist agora!</TituloCriar>
                    
                    <NomePlaylist 
                         placeholder="Digite o nome da sua playlist..."
                         value={this.state.playlist}
                         onChange={this.handlePlaylist}
                    />

                    <DivBotoes>
                        <Botoes onClick={this.criarPlaylist}>Criar Playlist</Botoes>
                        <Botoes onClick={this.props.irListaPlaylists}>Vizualizar Playlists</Botoes>
                    </DivBotoes>  
                </ConteinerCriar>
            </Conteiner>     
        )
    }
}
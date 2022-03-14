import axios from "axios";
import React from "react";
import styled from "styled-components";

const ConteinerPrincipal = styled.div `
    background-color: #28a830;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 500px;
    padding: 50px;
`
const ContAdicionarMusica = styled.div`
    background-color: rgba(00,00,00,.7);
    border-bottom: 3px solid #ffffff;
    display: flex;
    flex-direction: column;
    width: 900px;
    align-items: center;
    padding: 0 20px;
    gap: 10px;
    
`
const Titulo = styled.p`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 30px;
    font-weight: bold;
    color: #ffffff;
`

const StyledInput = styled.input`
    border-color: 0;
    height: 25px;
    font-size: 15px;
    border-radius: 10px;
`

const StyledButton = styled.button `
    background-color: #000000;
    color: #ffffff;
    padding: 10px 30px;
    font-size: 15px;
    border-radius: 10px;
    border-color: green;
    margin-bottom: 50px;
    margin-top: 20px;
`

const ContMusica = styled.div `
    background-color: rgba(00,00,00,.7);
    border-bottom: 3px solid #ffffff;
    display: flex;
    justify-content: space-between;
    width: 900px;
    height: 80px;
    align-items: center;
    padding: 0 20px;
    gap: 10px;
`

const NomeMusica = styled.p `
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    color: #ffffff;
`

const ExcluirButton = styled.button`
    background-color: #000000;
    color: #ffffff;
    padding: 10px 30px;
    font-size: 15px;
    border-radius: 10px;
    border-color: green;
    /* margin-bottom: 50px;
    margin-top: 20px; */
`
const BotaoVoltar = styled.button `
    background-color: #000000;
    color: #ffffff;
    border-radius: 10px;
    border-color: green;
    padding: 15px 30px;
    font-size: 20px;
    width: 120px;
    margin-top: 50px;
`

export default class DetalhePlaylist extends React.Component {
    
    state = {
        name: "",
        artist: "",
        url: "",
        listaMusicas: []
    }

    componentDidMount() {
        this.pegarMusicas()
    }

    pegarMusicas = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selecionar.id}/tracks`
        const headers = {
            headers: {
                Authorization: "raul-vinicius-guimaraes"
            }
        }

        axios.get(url,headers)
        .then((res)=>{
            this.setState({listaMusicas:res.data.result.tracks})
            alert(res.data.result.tracks)
        })
        .catch((err)=>{
            alert(err)
        })
    }

    adicionarMusica = (event) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selecionar.id}/tracks`
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url
        }
        const headers = {
            headers: {
                Authorization: "raul-vinicius-guimaraes"
            }
        }

        axios.post(url,body,headers)
        .then((res)=>{
            this.setState({name:"", artist: "", url: ""})
            this.pegarMusicas()
            alert("Música adicionada com sucesso!")
        })
        .catch(()=>{
            alert("Não foi possível adicionar a música. Tente novamente!")
        })
    }

    removeMusica = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selecionar.id}/tracks/${id}`
        const headers = {
            headers: {
                Authorization: "raul-vinicius-guimaraes"
            }
        }

        axios.delete(url,headers)
        .then(()=>{
            alert("Música excluída com sucesso.")
            this.pegarMusicas()
        })
        .catch((err)=>{
            alert(err.response.data.message)
        })
    }

    handleNome = (event) => {
        this.setState({ name: event.target.value });
      };
    
      handleArtista = (event) => {
        this.setState({ artist: event.target.value });
      };
    
      handleUrl = (event) => {
        this.setState({ url: event.target.value });
      }; 
    
    render () {

        const musicasAdicionadas = this.state.listaMusicas.map((musica)=>{
            return(
                <ContMusica key={musica.id}>
                        <NomeMusica>{musica.name} - {musica.artist}</NomeMusica>
                        <audio preload controls>
                            <source src={musica.url} type= "audio/mp3" />
                        </audio>
                        <ExcluirButton onClick={() => this.removeMusica(musica.id)}>Excluir música</ExcluirButton>
                </ContMusica>
            )
        }) 

        return (
            <ConteinerPrincipal>
                <ContAdicionarMusica>
                    <Titulo>Adicione uma música:</Titulo>
                    <StyledInput 
                        placeholder="Nome da música"
                        value = {this.state.name}
                        onChange = {this.handleNome}
                    />
                    <StyledInput 
                        placeholder="Nome do artista/banda"
                        value = {this.state.artist}
                        onChange = {this.handleArtista}
                    />
                    <StyledInput 
                        placeholder="Link da música"
                        value = {this.state.url}
                        onChange = {this.handleUrl}
                    />
                    <StyledButton onClick={this.adicionarMusica}>Adicionar música</StyledButton>
                </ContAdicionarMusica>

                <div>{musicasAdicionadas}</div>

                <BotaoVoltar onClick={this.props.irCriarPlaylist}>Voltar</BotaoVoltar>

            </ConteinerPrincipal>
            
            

            
        )
    }
}
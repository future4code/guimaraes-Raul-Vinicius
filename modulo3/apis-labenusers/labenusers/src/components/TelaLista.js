import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUsuarios = styled.div `
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`

export default class TelaLista extends React.Component {

    state = {
        lista: []
    }

    componentDidMount() {
        this.pegaUsuarios()
    }

    pegaUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const headers = {
            headers: {
                Authorization: "raul-vinicius-guimaraes"
            }
        }

        axios.get(url,headers)
        .then((res)=>{
            this.setState({lista: res.data})
        })
        .catch((err)=>{
            console.log(err.response.data.message)
        })
    }

    // componentDidUpdate() {
    //     this.pegaUsuarios()
    // }

    deletaUsuarios = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        const headers = {
            headers: {
                Authorization: "raul-vinicius-guimaraes"
            }
        }

        axios.delete(url,headers)
        .then(()=>{
            alert("Usuário deletado!")
            this.pegaUsuarios()
        })
        .catch((err)=>{
            alert(err.response.data.message)
        })
    }

    render () {

        const listaUsuarios = this.state.lista.map((user)=>{
            return (
                <CardUsuarios key={user.id}>
                    <p>{user.name}</p>
                    <button onClick={()=>this.deletaUsuarios(user.id)}>X</button>
                </CardUsuarios>
            )
        })

        return (
            <div>
                <p>TelaLista</p>
                <button onClick={this.props.irParaCadastro}>Ir para cadastro</button>
                {listaUsuarios}
            </div>
        )
    }
}
import React, { Component } from 'react'
import api from '../api/Api'

function imagemPerfil(param) {
    return <img src={param} alt="imagem não encontrada" className="foto"></img>   
}

class Usuarios extends Component {
    constructor(props){
        super(props);
        this.state = {
            infoUsuario: [] // criar um estado para um array
        } 
    }
    

    async componentDidMount(nome) {// realizar uma busca em uma api
        try{
        console.log(nome);
        const reposta = await api.get(nome);
        this.setState({ infoUsuario: reposta.data });

        }catch(erro){
            alert("Não foi possível completar a sua pesquisa")
        }
        
    }

    render() {
        const { infoUsuario } = this.state;   //setando as informações do array     

        return (
            <div className="informacoes">
                <h2>
                    {imagemPerfil(infoUsuario.avatar_url)}<br />
                    <br />

                    <form >
                        <input type="text" id="usuario" className="text" placeholder="Login do Usuário" enterKeyHint={alert} />
                        <button type="button" id="botao" className="botao" onClick={() =>  this.componentDidMount(document.getElementById('usuario').value)}>
                            Pesquisar
                        </button>
                    </form>
                    <br />
                    
                    <strong>Login: {infoUsuario.login === null && "Não informado"}{infoUsuario.login}</strong><br />
                    <br />

                    <strong>Nome: {infoUsuario.name === null && "Não informado"}{infoUsuario.name}</strong><br />
                    <br />

                    <strong>Empresa Atual: {infoUsuario.company === null && "Não informado"}{infoUsuario.company}</strong><br />
                    <br />

                    <strong>Localização: {infoUsuario.location === null  && "Não informado"}{infoUsuario.location}</strong><br />
                    <br />

                    <strong>Biografia: {infoUsuario.bio === null && "Não informado"}{infoUsuario.bio}</strong><br />
                    <br />

                    <strong>Blog: {infoUsuario.blog === "" && "Não informado"}{infoUsuario.blog}</strong><br />
                    <br />

                    <strong>Email: {infoUsuario.email === null && "Não informado"}{infoUsuario.email}</strong><br />
                    <br />

                    <strong>Quantidade de repositórios: {infoUsuario.public_repos}</strong><br />
                    <br />

                    <strong>Quantidade de seguidores: {infoUsuario.followers}</strong><br />
                    <br />
                </h2>
            </div>
        )
    }
}

export default Usuarios
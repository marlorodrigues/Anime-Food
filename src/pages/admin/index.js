import React, { Component } from 'react';
import './style.css';
import user from './user-solid.svg'
import lock from './lock-solid.svg'
// import { Link } from 'react-router-dom';


export default class Main extends Component {
    state = {
        admin: String,
        password: String
    };

    componentDidMount() { //Executa uma acao assim q o componente e renderizado 
        this.changeVisibility();
    }

    changeVisibility() {
        document.getElementById("header-page").style.display = 'none';
    }

    render() { //Renderiza o componente

        //Checar as propriedades e ver se sao validas antes de montar o componente
        return (
            <div id="for-background">
                <h1 id="identity">Admin  </h1>
                <div id="background-admin-page">
                    {/* 
                        - Falta pegar o formulario e enviar para o back end,
                        - Encriptar os dados
                        - Usar um middleware
                        - Criar a pagina logado e suas funcoes
                     */}
                    <form>
                        <div className="login-box">
                            <div className="textbox">
                                <img src={user} className="images-login" alt="" />
                                <input className="inputs" type="text" aria-label="Usuário" placeholder="Usuário" />
                            </div>

                            <div className="textbox">
                                <img src={lock} className="images-login" alt="" />
                                <input className="inputs" type="password" aria-label="Senha" placeholder="Senha" />
                            </div>

                            <button id="btn-login" type='submit'>Entrar</button>
                        </div>
                    </form>
                </div >
            </div>


        )
    }
}



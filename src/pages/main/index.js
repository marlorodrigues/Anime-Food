import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';
// import omelete from './omelete.jpeg'

export default class Main extends Component {
    state = {
        repositorios: [],
    };

    componentDidMount() { //Executa uma acao assim q o componente e renderizado 
        // this.loadProducts();
    }

    loadProducts = async (page = 1) => { //Para funcoes criadas usar a Arrow Function p/ poder usar o .this
        console.log("Indo fazer a requisicao");
        const response = await api.get('image');
        // const response = await api.get('/marlorodrigues/repos?page={page}'); //Se a requisicao trouxesse mais de uma pagina
        console.log("Feita -> " + response.data.status._image);

        document.getElementById('imgElem').setAttribute('src', response.data.status._image);
        // this.setState({ repositorios: response.data["AllThings"][0], page }); //Atualiza o estado atual 
        this.setState({ repositorios: response.data.status._image }); //Atualiza o estado atual 
    }

    addOnLittleCar = (e, idProduct) => {
        console.log("Adicionando o produto no carrinho -> " + idProduct);
        // this.setState({ carrinho: idProduct }); //Atualiza o estado atual 
    }

    render() { //Renderiza o componente
        // const { repositorios } = this.state;


        return (
            <div className="product-list">
                <div className="grid-container">
                    <div className="item1">
                        <p id="description-food">Last: Teste</p>
                        <img id="imgElem" alt=""></img>
                    </div>

                </div>
                <div className="actions">
                    <button onClick={this.loadProducts}>Anterior</button>
                    {/* <button disabled={page === 1} onClick={this.prevPage}>Anterior</button> */}
                    {/* <button disabled={page === 1} onClick={this.nextPage}>Proximo</button> No meu caso so ha uma pagina, se houvesse outra, e so puxar pela api */}
                </div>
            </div >

        )
    }
}

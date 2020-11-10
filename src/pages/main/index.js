import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';
import { Link } from 'react-router-dom';
import lamen from './lamen-naruto.jpeg'
import porkBacon from './pork-bacon.jpeg'
import ramen from './ramen-shokugeki.jpeg'
import rolinhoPrimavera from './rolinho-primavera.jpeg'
import comida from './sei-la.jpeg'
import bentou from './bentou.jpeg'
// import omelete from './omelete.jpeg'

export default class Main extends Component {
    state = {
        repositorios: [],
        carrinho: [],
        page: 1
    };

    componentDidMount() { //Executa uma acao assim q o componente e renderizado 
        this.loadProducts();
    }

    loadProducts = async (page = 1) => { //Para funcoes criadas usar a Arrow Function p/ poder usar o .this
        const response = await api.get('/marlorodrigues/repos');
        // const response = await api.get('/marlorodrigues/repos?page={page}'); //Se a requisicao trouxesse mais de uma pagina

        this.setState({ repositorios: response.data, page }); //Atualiza o estado atual 
    }

    prevPage = () => { //Volta uma pagina
        const { page } = this.state;

        if (page === 1) return;

        // const pageNumber = page - 1;
        // this.loadProducts(pageNumber);
    }

    nextPage = () => { //Avanca uma pagina
        const { page } = this.state;

        if (page === 1) return;

        // const pageNumber = page + 1;

        // this.loadProducts(pageNumber);
    }

    addOnLittleCar = (e, idProduct) => {
        console.log("Adicionando o produto no carrinho -> " + idProduct);
        // this.setState({ carrinho: idProduct }); //Atualiza o estado atual 
    }

    render() { //Renderiza o componente
        const { page } = this.state;

        return (
            <div className="product-list">
                <div className="grid-container">
                    <div className="item1">
                        <img src={lamen} id="img-item1" alt="imagem de comida" />
                        <p id="description-food">Este e so um teste para testar coisas que precisam ser testadas. Pois se nao forem testadas talvez nao funcionem.</p>
                        <div id="price-container">
                            <p id="name-price">Preço</p>
                            <p id="price">R$ 24,90</p>
                        </div>
                        <Link to="/" onClick={(e) => this.addOnLittleCar(e, 200)}>Quero esse!</Link>
                    </div>
                    <div className="item1">
                        <img src={porkBacon} id="img-item1" alt="imagem de comida" />
                        <p id="description-food">Este e so um teste para testar coisas que precisam ser testadas. Pois se nao forem testadas talvez nao funcionem.</p>
                        <div id="price-container">
                            <p id="name-price">Preço</p>
                            <p id="price">R$ 18,90</p>
                        </div>
                        <Link to="/" onClick={(e) => this.addOnLittleCar(e, 300)}>Quero esse!</Link>
                    </div>
                    <div className="item1">
                        <img src={ramen} id="img-item1" alt="imagem de comida" />
                        <p id="description-food">Este e so um teste para testar coisas que precisam ser testadas. Pois se nao forem testadas talvez nao funcionem.</p>
                        <div id="price-container">
                            <p id="name-price">Preço</p>
                            <p id="price">R$ 28,90</p>
                        </div>
                        <Link href="#">Quero esse!</Link>
                    </div>
                    <div className="item1">
                        <img src={rolinhoPrimavera} id="img-item1" alt="imagem de comida" />
                        <p id="description-food">Este e so um teste para testar coisas que precisam ser testadas. Pois se nao forem testadas talvez nao funcionem.</p>
                        <div id="price-container">
                            <p id="name-price">Preço</p>
                            <p id="price">R$ 19,90</p>
                        </div>
                        <Link href="#">Quero esse!</Link>
                    </div>
                    <div className="item1">
                        <img src={comida} id="img-item1" alt="imagem de comida" />
                        <p id="description-food">Este e so um teste para testar coisas que precisam ser testadas. Pois se nao forem testadas talvez nao funcionem.</p>
                        <div id="price-container">
                            <p id="name-price">Preço</p>
                            <p id="price">R$ 34,90</p>
                        </div>
                        <Link href="#">Quero esse!</Link>
                    </div>
                    <div className="item1">
                        <img src={bentou} id="img-item1" alt="imagem de comida" />
                        <p id="description-food">Este e so um teste para testar coisas que precisam ser testadas. Pois se nao forem testadas talvez nao funcionem.</p>
                        <div id="price-container">
                            <p id="name-price">Preço</p>
                            <p id="price">R$ 12,90</p>
                        </div>
                        <Link href="#">Quero esse!</Link>
                    </div>
                </div>
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === 1} onClick={this.nextPage}>Proximo</button> {/* No meu caso so ha uma pagina, se houvesse outra, e so puxar pela api */}
                </div>
            </div >

        )
    }
}

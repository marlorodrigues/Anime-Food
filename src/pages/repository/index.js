import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import lamen from './lamen-naruto.jpeg'
import './styles.css'


// https://material-ui.com/pt/components/tables/


export default class LittleKart extends Component {
    state = {
        products: [],
        observation: String,
        TotalPrice: String
    }

    componentDidMount() {
    }

    //GCode (Gambiarra Code)
    async searchFull_HTML(html_user, id) {
    }

    render() {

        return (
            <div className="kart-info">
                <div>
                    <h2>Pedidos no Carrinho</h2>
                </div>

                <div>
                    <div id="grid-cont">
                        <div id="item1-kart">
                            <img src={lamen} id="img-item1-kart" alt="imagem de comida" />
                            <div id="text-product">
                                <p id="description-food-kart">Este e so um teste para testar coisas que precisam ser testadas. Pois se nao forem testadas talvez nao funcionem.</p>
                                <div id="price-container-kart">
                                    <p id="price-kart">R$ 24,90</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p><Link to={'/'}>Finalizar</Link> </p>

            </div >
        )
    }
}


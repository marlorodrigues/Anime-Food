import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
import api from '../../services/api';


// https://material-ui.com/pt/components/tables/


export default class LittleKart extends Component {
    state = {
        foods: [],
        lenght: Number,
    };

    componentDidMount() { //Executa uma acao assim q o componente e renderizado 
        this.loadProducts();
    }

    loadProducts = async () => { //Para funcoes criadas usar a Arrow Function p/ poder usar o .this

        var counter = 0;
        for (let index = 0; index < localStorage.length; index++) {
            // this.state.id.push(localStorage.getItem("item" + index));

            const response = await api.get('showMenu/' + localStorage.getItem("item" + index));
            const { menu } = response.data
            var array = [];


            array.push(menu);
            counter++;
        }

        this.setState({ foods: array, length: counter }); //Atualiza o estado atual 
    }


    renderItem(food) {
        console.log("Food -> " + food);
        return (
            <div className="food-container">
                <div id={food._id} className="item1">
                    <img src={food._image} id="img-item-kart" alt="imagem de comida" />
                    <p id="description-food-kart">{food._description}</p>
                    <div id="price-container">
                        <p id="name-price">Preço</p>
                        <p id="price">R$ {food._price}</p>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { foods, lenght } = this.state;
        console.log("Tamanho -> " + foods.length);
        console.log("Tamanhoo -> " + lenght);

        return (
            <div className="kart-info">
                <div>
                    <h2>Pedidos no Carrinho</h2>
                </div>

                <div>
                    <div id="grid-cont">
                        <div id="item1-kart">
                            {foods.map(this.renderItem)}
                        </div>
                    </div>
                </div>

                <p><Link to={'/'}>Finalizar</Link> </p>

            </div >
        )
    }
}


/*

<div id="text-product">
                                <p id="description-food-kart">Este e so um teste para testar coisas que precisam ser testadas. Pois se nao forem testadas talvez nao funcionem.</p>
                                <div id="price-container-kart">
                                    <p id="price-kart">R$ 24,90</p>
                                </div>
                            </div>
*/

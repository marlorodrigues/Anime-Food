import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';
import { Link } from 'react-router-dom';

export default class Main extends Component {
    state = {
        foods: [],
        lenght: Number,
        page: Number,
        littleCar: [],
        lenghtCar: Number
    };

    componentDidMount() { //Executa uma acao assim q o componente e renderizado 
        this.loadProducts();
    }

    loadProducts = async () => { //Para funcoes criadas usar a Arrow Function p/ poder usar o .this
        const response = await api.get('showAll');
        const { AllMenu } = response.data
        var counter = 0, page = 0;
        var array = [];
        this.setState({ lenghtCar: 0 });
        localStorage.clear();

        AllMenu.forEach(element => {
            if (counter === 3) {
                page++;
                counter = 0;
                // this.setState({ foods: element, counter, page }); //Atualiza o estado atual 
                this.setState({ counter, page }); //Atualiza o estado atual 
                array.push(element);
            }
            else {
                // this.setState({ foods: element, counter, page }); //Atualiza o estado atual 
                this.setState({ counter, page }); //Atualiza o estado atual 
                counter++
                array.push(element);
            }
        });

        this.setState({ foods: array, counter, page }); //Atualiza o estado atual 
        this.setState({ lenght: counter }); //Atualiza o estado atual 
    }

    addOnLittleCar = (idProduct) => {
        let lenghtCar = this.state.lenghtCar;
        this.state.littleCar.push(idProduct);
        localStorage.setItem(("item" + lenghtCar), idProduct);
        console.log(("item" + lenghtCar))

        lenghtCar++;
        this.setState({ lenghtCar: lenghtCar });
    }

    //		"_image": "data:image/gif;base64,
    renderItem = (food) => {
        return (
            <div className="food-container">
                <div id={food._id} className="item1">
                    <img src={food._image} id="img-item" alt="imagem de comida" />
                    <p id="description-food">{food._description}</p>
                    <div id="price-container">
                        <p id="name-price">Preço</p>
                        <p id="price">R$ {food._price}</p>
                    </div>
                    <Link to="" onClick={(e) => this.addOnLittleCar(food._id)}>Quero esse!</Link>
                </div>
            </div>
        )
    }

    render() { //Renderiza o componente
        const { foods, page } = this.state;

        //Checar as propriedades e ver se sao validas antes de montar o componente
        return (
            <div className="product-list">
                <div className="grid-container">
                    {foods.map(this.renderItem)}
                </div>

                <div className="actions">
                    {/* <button onClick={this.loadProducts}>Anterior</button> */}
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === 1} onClick={this.nextPage}>Proximo</button>
                </div>
            </div >

        )
    }
}


/* <div>
                <div id={food._id} className="item1">
                    <img src={food._image} id="img-item" alt="imagem de comida" />
                    <p id="description-food">{food._description}</p>
                    <div id="price-container">
                        <p id="name-price">Preço</p>
                        <p id="price">R$ {food._price}</p>
                    </div>
                </div>
                <Link to="/kart" onClick={(e) => this.addOnLittleCar(e, food._id)}>Quero esse!</Link>
            </div>

    // showState = () => {
    //     this.state.littleCar.forEach(element => {
    //         console.log("Teste -> " + element);
    //     });
    // }
*/

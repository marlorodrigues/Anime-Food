import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';
import { Link } from 'react-router-dom';
import InfiniteScroll from '../../components/InifinityScroll/index';

export default class Main extends Component {
    state = {
        foods: [],
        lenght: Number,
        littleCar: [],
        lenghtCar: Number,
        isReceveOrder: String,
        isAlreadyMounted: Number
    };

    componentDidMount() { //Executa uma acao assim q o componente e renderizado 
        this.loadProducts();
    }

    loadProducts = async () => { //Para funcoes criadas usar a Arrow Function p/ poder usar o .this
        const response = await api.get('showAll');
        const { AllMenu } = response.data
        var counter = 0, page = 0;
        var array = [], isReceiving;
        this.setState({ lenghtCar: 0 });
        localStorage.clear();

        AllMenu.forEach(element => {
            // counter = 0;
            this.setState({ lenght: counter });
            array.push(element);
            counter++

            if (element.isReceivingOrders !== undefined) {
                isReceiving = element.isReceivingOrders;
                console.log("isReceiving: " + isReceiving);
                this.setState({ isReceveOrder: isReceiving });
            }
        });

        this.setState({ foods: array, counter, page }); //Atualiza o estado atual 
        this.setState({ lenght: counter });
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
        const { isReceveOrder } = this.state;

        if (isReceveOrder === "true") {
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

        return (
            <div className="food-container">
                <div id={food._id} className="item1">
                    <img src={food._image} id="img-item" alt="imagem de comida" />
                    <p id="description-food">{food._description}</p>
                    <div id="price-container">
                        <p id="name-price">Preço</p>
                        <p id="price">R$ {food._price}</p>
                    </div>
                    <Link to="" id="buttons-foods" onClick={(e) => this.addOnLittleCar(food._id)} style={{ top: this.props }}>Quero esse!</Link>
                </div>
            </div>
        )
    }

    render() { //Renderiza o componente
        const { foods } = this.state;

        //Checar as propriedades e ver se sao validas antes de montar o componente
        return (
            <div className="product-list">
                <div className="grid-container">
                    {foods.map(this.renderItem)}

                </div>

                {true && (
                    <InfiniteScroll fetchMore={() => console.log("Apareceu na tela!!")} />
                )
                }

            </div >
        )
    }
}
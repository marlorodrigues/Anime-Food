import React from 'react';
import './style.css'


const changeToKartPAge = () => {
    window.location.href = '/kart';
}
//A mesma coisa do que se fizesse com o template da classe
const Header = () => (
    <div>
        <div id="container-header">
            <header id="main-header">Anime Food</header>
            <div id="group-of-buttons">
                <form action='/' method='post'>
                    <input type="text" id="search-input" className="forShadow" placeholder="Tô pensando em pedir..." />
                    <button type='Submit' id="search-button" />
                </form>
                <button type='button' onClick={changeToKartPAge} id="little-market-car" action="/kart" ></button>
            </div>
        </div>
        <div id="linha-horizontal" />
    </div>

);

export default Header;
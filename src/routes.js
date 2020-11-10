import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main/index';
import Kart from './pages/repository/index';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/kart" component={Kart} />
        </Switch>
    </BrowserRouter>
);


export default Routes;

//BrowserRoute diz para o browser que esta usando rotas
//Switch impede duas rotas em simultaneo
//Route as rotas


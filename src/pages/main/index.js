import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';
import { Link } from 'react-router-dom';

export default class Main extends Component {
    state = {
        repositorios: [],
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

        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    }

    nextPage = () => { //Avanca uma pagina
        const { page } = this.state;

        if (page === 1) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

    render() { //Renderiza o componente
        const { repositorios, page } = this.state;

        return (
            <div className="product-list">
                {repositorios.map(
                    repo => (
                        <article key={repo.id} id="article">
                            <strong>{repo.name}</strong>
                            <p>{repo.full_name}</p>
                            <Link to={`/repository/${repo.id}`}>Acessar</Link>
                        </article>
                    )
                )}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === 1} onClick={this.nextPage}>Proximo</button> {/* No meu caso so ha uma pagina, se houvesse outra, e so puxar pela api */}
                </div>
            </div>
        )
    }
}

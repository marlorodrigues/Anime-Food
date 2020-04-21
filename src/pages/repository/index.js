import React, { Component } from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom';

export default class Repository extends Component {
    state = {
        name: String,
        full_name: String,
        html_url: String,
        description: String,
        updated_at: String
    }


    componentDidMount() {
        const { id } = this.props.match.params;

        this.searchFull_HTML('/marlorodrigues/repos', id);
    }

    //GCode (Gambiarra Code)
    async searchFull_HTML(html_user, id) {
        var response = await api.get(html_user);
        response = response.data;

        for (let i = 0; i < response.length; i++) {
            const element = response[i];

            // eslint-disable-next-line eqeqeq
            if (element.id == id) {
                //Just for debug
                // console.log(element.updated_at);
                // console.log(element.description);
                // console.log(element.html_url);
                // console.log(element.full_name);
                // console.log(element.name);

                this.setState({
                    name: element.name,
                    full_name: element.full_name,
                    html_url: element.html_url,
                    description: element.description,
                    updated_at: element.updated_at
                })
            }
        }
    }

    render() {
        const {name, description, updated_at, full_name, html_url} = this.state;

        return (
            <div className="repo-info">

                <h1>{`Nome: ${name}`}</h1>
                <p>{`Descriçao: ${description}`}</p>
                <p>{`Update At: ${updated_at}`}</p>
                <p>{`Full Name: ${full_name}`}</p>
                <p>{`URL: ${html_url}`}</p>
                
                <p><Link to={html_url}>Acessar No GitHub</Link> </p>

            </div>
        )
    }
}


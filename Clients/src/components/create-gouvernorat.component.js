import React, { Component } from 'react';
import axios from 'axios';
export default class CreateGouvernorat extends Component {
    constructor(props) {
        super(props);

        this.onChangeGouvernorat = this.onChangeGouvernorat.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: "",
        }
    }

    onChangeGouvernorat(e) {
        this.setState({
            name: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const gouvernorat = {
            name: this.state.name,
        }

        console.log(gouvernorat);
        axios.post('http://localhost:5000/gouvernorats/add', gouvernorat)
            .then(res => console.log(res.data));


        this.setState({
            name: ''
        })
    }
    render() {
        return (
            <div>
                <h3>Ajouter Une nouvelle Gouvernorat</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nom : </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeGouvernorat}
                        />
                    </div>
                    <div className="form-group">
                        <input type='submit' className="btn btn-primary"
                            value="Ajouter" />
                    </div>
                </form>
            </div>
        )
    }
}
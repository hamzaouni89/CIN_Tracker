import React, { Component } from 'react';
import axios from 'axios';
export default class CreateMunicipalite extends Component {
    constructor(props) {
        super(props);

        this.onChangeMunicipalite = this.onChangeMunicipalite.bind(this);
        this.onChangeGouvernorat = this.onChangeGouvernorat.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            gouvernorat: "",
            nom: "",
            gouvernorats: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/gouvernorats/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        gouvernorats: response.data.map(gouvernorat => gouvernorat.name),
                        name: response.data[0].name
                    })
                }
            })
    }

    onChangeGouvernorat(e) {
        this.setState({
            gouvernorat: e.target.value
        })
    }

    onChangeMunicipalite(e) {
        this.setState({
            nom: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const municipalite = {
            gouvernorat:this.state.gouvernorat,
            nom: this.state.nom,
        }

        console.log(municipalite);
        axios.post('http://localhost:5000/municipalites/add', municipalite)
            .then(res => console.log(res.data));


    }
    render() {
        return (
            <div>
                <h3>Ajouter Une nouvelle Municipalite</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Gouvernorat : </label>
                        <select
                            required
                            className="form-control"
                            value={this.state.gouvernorat}
                            onChange={this.onChangeGouvernorat}>
                            {
                                this.state.gouvernorats.map(function (gouvernorat) {
                                    return <option
                                        key={gouvernorat}
                                        value={gouvernorat}>{gouvernorat}
                                    </option>

                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Nom : </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.nom}
                            onChange={this.onChangeMunicipalite}
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
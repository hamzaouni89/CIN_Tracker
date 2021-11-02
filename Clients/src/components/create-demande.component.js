import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default class CreateDemande extends Component {
    constructor(props) {
        super(props);

        this.onChangeGouvernorat = this.onChangeGouvernorat.bind(this);
        this.onChangeMunicipalite = this.onChangeMunicipalite.bind(this);
        this.onChangeDecanat = this.onChangeDecanat.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeNomPrenom = this.onChangeNomPrenom.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeSex = this.onChangeSex.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeActeNaissance = this.onChangeActeNaissance.bind(this);
        this.onChangeNationalite = this.onChangeNationalite.bind(this);
        this.onChangeCarteResidence = this.onChangeCarteResidence.bind(this);
        this.onChangeQuittance = this.onChangeQuittance.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            gouvernorat: "",
            municipalite: "",
            decanat: "",
            nom_prenom: "",
            age: 0,
            sex: "",
            date: new Date(),
            type: "",
            acte_naissance: "",
            nationalite: "",
            carte_residence: "",
            quittance: "",
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
            municipalite: e.target.value
        })
    }

    onChangeDecanat(e) {
        this.setState({
            decanat: e.target.value
        })
    }
    onChangeNomPrenom(e) {
        this.setState({
            nom_prenom: e.target.value
        })
    }
    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        })
    }

    onChangeSex(e) {
        this.setState({
            sex: e.target.value
        })
    }

    onChangeType(e) {
        this.setState({
            type: e.target.value
        })
    }

    onChangeActeNaissance(e) {
        this.setState({
            acte_naissance: e.target.value
        })
    }

    onChangeNationalite(e) {
        this.setState({
            nationalite: e.target.value
        })
    }

    onChangeCarteResidence(e) {
        this.setState({
            carte_residence: e.target.value
        })
    }

    onChangeQuittance(e) {
        this.setState({
            quittance: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const demande = {
            gouvernorat:this.state.gouvernorat,
            municipalite: this.state.municipalite,
            decanat: this.state.decanat,
            nom_prenom: this.state.nom_prenom,
            date: this.state.date,
            age: this.state.age,
            sex: this.state.sex,
            type: this.state.type,
            acte_naissance: this.state.acte_naissance,
            nationalite: this.state.nationalite,
            carte_residence: this.state.carte_residence,
            quittance: this.state.quittance,
        }

        console.log(demande);
        axios.post('http://localhost:5000/demandes/add', demande)
            .then(res => console.log(res.data));

        //window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Ajouter une demandes</h3>
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
                        <label>Municipalite: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.municipalite}
                            onChange={this.onChangeMunicipalite}
                        />
                    </div>
                    <div className="form-group">
                        <label>Decanat: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.decanat}
                            onChange={this.onChangeDecanat}
                        />
                    </div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Type : </FormLabel>
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group" >
                            <FormControlLabel value="Nouveau"  onChange={this.onChangeType} control={<Radio />} label="Nouveau" />
                            <FormControlLabel value="Renouvellement"  onChange={this.onChangeType} control={<Radio />} label="Renouvellement" />
                            <FormControlLabel value="Perte"  onChange={this.onChangeType} control={<Radio />} label="Perte" />
                        </RadioGroup>
                    </FormControl> 
                    <div className="form-group">
                        <label>Nom et Prenom: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.nom_prenom}
                            onChange={this.onChangeNomPrenom}
                        />
                    </div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Sexe : </FormLabel>
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group" >
                            <FormControlLabel value="Homme"  onChange={this.onChangeSex} control={<Radio />} label="Homme" />
                            <FormControlLabel value="Femme"  onChange={this.onChangeSex} control={<Radio />} label="Femme" />
                        </RadioGroup>
                    </FormControl>                  
                    <div className="form-group">
                        <label>Age : </label>
                        <input type='number' required className="form-control"
                            value={this.state.age} onChange={this.onChangeAge} />
                    </div>
                    <div className="form-group">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Acte de naissance :</FormLabel>
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group" >
                            <FormControlLabel value="Oui"  onChange={this.onChangeActeNaissance} control={<Radio />} label="Oui" />
                            <FormControlLabel value="Non"  onChange={this.onChangeActeNaissance} control={<Radio />} label="Non" />
                        </RadioGroup>
                    </FormControl>
                    </div>
                    <div className="form-group"> 
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Nationalite :</FormLabel>
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group" >
                            <FormControlLabel value="Oui"  onChange={this.onChangeNationalite} control={<Radio />} label="Oui" />
                            <FormControlLabel value="Non"  onChange={this.onChangeNationalite} control={<Radio />} label="Non" />
                        </RadioGroup>
                    </FormControl>
                    </div>
                    <div className="form-group"> 
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Carte de residence :</FormLabel>
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group" >
                            <FormControlLabel value="Oui"  onChange={this.onChangeCarteResidence} control={<Radio />} label="Oui" />
                            <FormControlLabel value="Non"  onChange={this.onChangeCarteResidence} control={<Radio />} label="Non" />
                        </RadioGroup>
                    </FormControl>
                    </div>
                    <div className="form-group"> 
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Quittance :  :</FormLabel>
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group" >
                            <FormControlLabel value="Oui"  onChange={this.onChangeQuittance} control={<Radio />} label="Oui" />
                            <FormControlLabel value="Non"  onChange={this.onChangeQuittance} control={<Radio />} label="Non" />
                        </RadioGroup>
                    </FormControl>
                    </div>
                    <div className="form-group">
                        <label>Date : </label>
                        <div>
                            <DatePicker className="form-group"
                                selected={this.state.date} onChange={this.onChangeDate} />
                        </div>
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
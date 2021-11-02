import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">CIN Tracker</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Demandes</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/demande" className="nav-link">Ajouter une demande</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/gouvernorat" className="nav-link">Ajouter une gouvernorat</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/municipalite" className="nav-link">Ajouter une municipalite</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
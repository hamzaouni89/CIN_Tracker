import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component";
import DemandesList from "./components/demandes-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import CreateGouvernorat from "./components/create-gouvernorat.component";
import CreateDemande from "./components/create-demande.component";
import CreateMunicipalite from "./components/create-municipalite.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={DemandesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
        <Route path="/gouvernorat" component={CreateGouvernorat} />
        <Route path="/demande" component={CreateDemande} />
        <Route path="/municipalite" component={CreateMunicipalite} />
      </div>
    </Router>
  );
}

export default App;

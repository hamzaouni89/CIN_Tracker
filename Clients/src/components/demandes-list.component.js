import React , { useState, useEffect } from 'react' ;
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';

export default  function DemandesList() {
        const [isLoaded,setIsLoaded] = useState(false);
        const [rowData,setRowData] = useState([]);
        useEffect(() => {
            var apiurl = "http://localhost:5000/demandes/";
            axios
                .get(apiurl)
                .then((response) => response.data)
                .then((data) => {
                setIsLoaded(true);
                setRowData(data);
                console.log(data);
            });
        }, []);
    
        const columns = [
            { field: '_id', hide: true },
            { field: 'gouvernorat', headerName: 'Gouvernorat', width: 200 },
            { field: 'municipalite', headerName: 'Municipalite', width: 200 },
            { field: 'decanat', headerName: 'Decanat', width: 200 },
            { field: 'nom_prenom', headerName: 'Nom et Prenom', width:200 },
            { field: 'age', headerName: 'Age', width: 200 },
            { field: 'sex', headerName: 'Sexe', width: 200 },
            { field: 'type', headerName: 'Type', width: 200 },
            { field: 'date',  type: 'date',headerName:'Date', width:200},
            { field: 'acte_naissance', headerName: 'Acte de naissance', width: 200 },
            { field: 'nationalite', headerName: 'Nationalite', width: 200 },
            { field: 'carte_residence', headerName: 'Carte de residence', width: 200 },
            { field: 'quittance', headerName: 'Quittance', width: 200 },
        ]

        return (
            <div style={{ height:800, width: "100%" }}>
               <h3>Liste des Demandes</h3>
               <DataGrid
                    rows={rowData}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    getRowId={(row) => row._id}
                />

            </div>
        )
}
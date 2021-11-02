const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
var db = require('./database/db')
app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true }
// );
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercices');
const usersRouter = require('./routes/users');
const gouvernoratsRouter = require('./routes/gouvernorats');
const municipalitesRouter = require('./routes/municipalites');
const demandesRouter = require('./routes/demandes');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/gouvernorats', gouvernoratsRouter);
app.use('/municipalites', municipalitesRouter);
app.use('/demandes', demandesRouter);
app.listen(port, () => {
  console.log(`Server is running on port : ${port} `)
})
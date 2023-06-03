const mongoose = require('mongoose');
const path = require('path');
const Usuarios = require(path.join(__dirname + "/models/usuarios.js"));

mongoose.connect('mongodb://127.0.0.1:27017/Pokemons', { useNewUrlParser: true, useUnifiedTopology: true });


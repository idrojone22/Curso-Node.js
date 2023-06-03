const mongoose = require('mongoose');

let UsuariosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    telefono: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /^\d{9}$/
    },
    nombreUsuario: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    gmail: String
});

let Usuarios = mongoose.model('Usuarios', UsuariosSchema);
module.exports = Usuarios;
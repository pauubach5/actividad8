const { Schema, model } = require('mongoose')

const inmuebleSchema = new Schema({
    piso: String,
    letra: String,
    extension: Number,
    numero_habitaciones: Number,
    alquilado: Boolean,
    nombre_propietario: String,
    email_contacto: String
}, {
    versionKey: false,
    timestamps: true
})

module.exports = model('inmueble', inmuebleSchema)
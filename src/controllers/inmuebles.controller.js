const InmuebleModel = require('../models/inmueble.model')

const getAllInmuebles = async (req, res) => {
    try {
        const inmuebles = await InmuebleModel.find()
        res.json(inmuebles)
    } catch (error) {
        res.json(error.message)
    }
}

const createInmuebles = async (req, res) => {
    const newInmueble = await InmuebleModel.create(req.body)
    res.json(newInmueble)
}
const updateInmuebles = async (req, res) => {
    const { inmuebleId } = req.params
    try {
        const result = await InmuebleModel.findByIdAndUpdate(inmuebleId, req.body, { new: true })
        res.json(result)
    } catch (error) {
        res.json({ fatal: error.message })
    }
}
const deleteInmuebles = async (req, res) => {
    const { inmuebleId } = req.params
    try {
        const result = await InmuebleModel.findByIdAndDelete(inmuebleId)
        res.json(result)
    } catch (error) {

    }
}

module.exports = { getAllInmuebles, createInmuebles, updateInmuebles, deleteInmuebles }
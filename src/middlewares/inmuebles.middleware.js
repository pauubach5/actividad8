const InmuebleModel = require('../models/inmueble.model')

const checkInmuebleId = async (req, res, next) => {

    const { inmuebleId } = req.params;

    try {
        const inmueble = await InmuebleModel.findById(inmuebleId)
        if (!inmueble) {
            res.json({ fatal: "El inmueble no existe" })
        }
        next()
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

module.exports = checkInmuebleId
const router = require('express').Router()
const InmueblesController = require('../../controllers/inmuebles.controller')
const checkInmuebleId = require('../../middlewares/inmuebles.middleware')

router.get('/', InmueblesController.getAllInmuebles)
router.post('/', InmueblesController.createInmuebles)
router.put('/:inmuebleId', checkInmuebleId, InmueblesController.updateInmuebles)
router.delete('/:inmuebleId', checkInmuebleId, InmueblesController.deleteInmuebles)

module.exports = router
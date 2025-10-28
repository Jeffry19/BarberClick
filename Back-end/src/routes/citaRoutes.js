const exprress = require('express');
const router = exprress.Router();
const { crearCita, obtenerCitas, obtenerCitaPorId, eliminarCita, actualizarCita } = require('../controllers/citasControllers');

// Crear una nueva cita
router.post('/', crearCita);

// Obtener todas las citas
router.get('/', obtenerCitas);

// Obtener una cita por ID
router.get('/:id', obtenerCitaPorId);

// Editar una cita por ID
router.put('/:id', actualizarCita);

// Eliminar una cita por ID
router.delete('/:id', eliminarCita);

module.exports = router;
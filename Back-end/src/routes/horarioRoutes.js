const express = require('express');
const router = express.Router();
const { crearHorario, eliminarHorario, actualizarHorario, obtenerHorarios, obtenerHorarioPorId } = require('../controllers/horariosController');



// Crear un nuevo horario
router.post('/', crearHorario);

// Obtener todos los horarios
router.get('/', obtenerHorarios);   

// Obtener un horario por ID
router.get('/:id', obtenerHorarioPorId);

// Editar un horario por ID
router.put('/:id', actualizarHorario);

// Eliminar un horario por ID
router.delete('/:id', eliminarHorario);


module.exports = router;
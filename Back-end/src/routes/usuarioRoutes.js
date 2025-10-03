const express = require('express');
const router = express.Router();
const { Usuario } = require('../models');
const { crearUsuario, editarUsuario, eliminarUsuario, obtenerUsuarioPorId, obtenerUsuarios } = require('../controllers/usuarioControllers');    


// Crear un nuevo usuario

router.post('/', crearUsuario);

// Obtener todos los usuarios
router.get('/', obtenerUsuarios);  

// Obtener un usuario por ID
router.get('/:id', obtenerUsuarioPorId);

// Editar un usuario por ID
router.put('/:id', editarUsuario);

// Eliminar un usuario por ID
router.delete('/:id', eliminarUsuario);

module.exports = router;
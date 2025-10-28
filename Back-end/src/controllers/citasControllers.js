const { Usuario } = require('../models');
const { HorarioDisponible } = require('../models');
const {Cita} = require('../models');


const crearCita = async (req, res) => {

    try {
        const datosValidos = await validarDatos(req.body);
        console.log('Datos del re.quest body:', req.body);
        const { usuario_id, horario_id, estado } = datosValidos;

        const nuevaCita = await Cita.create({
            usuario_id,
            horario_id,
            estado: estado || 'pendiente'
        });
        await nuevaCita.save();
        res.status(201).json({ message: 'Cita creada exitosamente', cita: nuevaCita });
        
    } catch (error) {
        res.status(500).json({ message: 'Error al crear cita', error: error.message });
        console.error('Error al crear cita:', error);
    }
}

const obtenerCitas = async (req, res) => {
    try {
        const citas = await Cita.findAll()
        res.status(200).json(citas);


    } catch (error) {
        res.status(500).json({ message: 'Error al obtener citas', error: error.message });
    }
}

const obtenerCitaPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const cita = await Cita.findByPk(id);
        res.status(200).json(cita);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener cita', error: error.message });
    }
}

const eliminarCita = async (req, res) => {
    try {
        const { id } = req.params;
        const cita = await Cita.findByPk(id);

        if (!cita) {
            return res.status(404).json({ message: 'Cita no encontrada' });
        }

        await cita.destroy();
        res.status(200).json({ message: 'Cita eliminada exitosamente' });

        
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar cita', error: error.message });
        console.error('Error al eliminar cita:', error);
    }
}

const validarDatos = async (body) => {

    const usuarioExiste = await Usuario.findByPk(body.usuario_id);
    const horarioExiste = await HorarioDisponible.findByPk(body.horario_id);
    const { usuario_id, horario_id, estado } = body;
    if (!usuario_id || !horario_id) {
        throw new Error('Faltan datos obligatorios');
    }else if (estado && !['pendiente', 'completada', 'cancelada'].includes(estado)) {
        throw new Error('Estado inválido');
    }else if (typeof usuario_id !== 'number' || typeof horario_id !== 'number') {
        throw new Error('usuario_id y horario_id deben ser números');
    }else if (estado && typeof estado !== 'string') {
        throw new Error('Estado debe ser una cadena de texto');
    }else if (estado && estado.trim() === '') {
        throw new Error('Estado no puede estar vacío');
    }else if (!usuarioExiste) {
        throw new Error('El usuario no existe');
        
    }else if (!horarioExiste) {
        throw new Error('El horario no existe');
    }

    return { usuario_id, horario_id, estado };
}

const actualizarCita = async (req, res) => {
    try {
        const {id} = req.params;
        const datosValidos = await validarDatos(req.body);
        console.log('Datos del request body para actualizar:', req.body);
        const { usuario_id, horario_id, estado } = datosValidos;
        const cita = await Cita.findByPk(id);

        cita.usuario_id = usuario_id;
        cita.horario_id = horario_id;
        cita.estado = estado;
        await cita.save();
        res.status(200).json({ message: 'Cita actualizada exitosamente', cita });
        
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar cita', error: error.message });
        console.error('Error al actualizar cita:', error);
    }
}



module.exports = {

    crearCita,
    obtenerCitas,
    eliminarCita,
    actualizarCita,
    obtenerCitaPorId
}
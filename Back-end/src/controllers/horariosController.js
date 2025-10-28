const {HorarioDisponible} = require('../models');


const crearHorario = async (req, res) => {

    try {

        const datosValidos = await validarDatos(req.body);
        const { barbero_id, fecha, hora, estado } = datosValidos;


        const nuevoHorario = await HorarioDisponible.create({
            barbero_id,
            fecha,
            hora,
            estado: estado || 'Disponible'

        });
        await nuevoHorario.save();
        res.status(201).json({ message: 'Horario creado exitosamente', horario: nuevoHorario });

        
    } catch (error) {
        res.status(500).json({ message: 'Error al crear horario', error: error.message });
       
    }
}

const eliminarHorario = async (req, res) => {
    try {

        const { id } = req.params;
        const horario = await HorarioDisponible.findByPk(id);
        if (!horario) {
            return res.status(404).json({ message: 'Horario no encontrado' });
        }
        await horario.destroy();
        res.status(200).json({ message: 'Horario eliminado exitosamente' });
        
    } catch (error) { 
        res.status(500).json({ message: 'Error al eliminar horario', error: error.message });
        console.error('Error al eliminar horario:', error);
        
    }

}

const actualizarHorario = async (req, res) => {
    try {
        const { id } = req.params;
        const datosValidos = await validarDatos(req.body);
        const { barbero_id, fecha, hora, estado } = datosValidos;

        const horario = await HorarioDisponible.findByPk(id);
        if (!horario) {
            return res.status(404).json({ message: 'Horario no encontrado' });
        }

        horario.barbero_id = barbero_id;
        horario.fecha = fecha;
        horario.hora = hora;
        horario.estado = estado || 'Disponible';
        await horario.save();

        res.status(200).json({
            message: 'Horario actualizado exitosamente',
            horario
        });

    } catch (error) {
        console.error('Error al actualizar horario:', error);
        res.status(500).json({ message: 'Error al actualizar horario', error: error.message });
    }
};

const obtenerHorarios = async (req, res) => {

    try {
        const horarios = await HorarioDisponible.findAll();
        res.status(200).json(horarios);

        
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener horarios', error: error.message });
        console.error('Error al obtener horarios:', error);
        
    }

}

const obtenerHorarioPorId = async (req, res) => {

    try {
        const { id } = req.params;
        const horario = await HorarioDisponible.findByPk(id);
        if (!horario) {
            return res.status(404).json({ message: 'Horario no encontrado' });
        }
        res.status(200).json(horario);
    
        
    } catch (error) {

        res.status(500).json({ message: 'Error al obtener horario', error: error.message });
        console.error('Error al obtener horario:', error);
        
    }
}


const validarDatos = async (body) => {

    const { barbero_id, fecha, hora, estado } = body;

    if (!barbero_id) throw new Error('El ID del barbero es obligatorio');
    if (!fecha) throw new Error('La fecha es obligatoria');
    if (!hora) throw new Error('La hora es obligatoria');

    // Validar formato de hora (HH:mm)
    const formatoHora = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if (!formatoHora.test(hora)) throw new Error('Formato inválido en la hora (HH:mm)');

    // Validar que la fecha no sea pasada
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); // quitar horas para comparar solo fechas
    const fechaIngresada = new Date(fecha);

    if (fechaIngresada < hoy) {
        throw new Error('No se pueden crear horarios en fechas pasadas');
    }

    // Validar rango laboral (8:00 a 16:00)
    const h = parseInt(hora.split(':')[0]);
    if (h < 8 || h >= 16) {
        throw new Error('El horario laboral es de 8:00 a 16:00');
    }

    // Bloquear hora de almuerzo (12:00 - 13:00)
    if (h === 12) {
        throw new Error('No se pueden agendar citas durante la hora de almuerzo (12:00 - 13:00)');
    }

    // Validar estado (opcional)
    const estadosValidos = ['Disponible', 'Reservado', 'Cancelado'];
    if (estado && !estadosValidos.includes(estado)) {
        throw new Error(`El estado debe ser uno de: ${estadosValidos.join(', ')}`);
    }

    // Validar que no exista otro horario para el mismo barbero, fecha y hora
    const horarioExistente = await HorarioDisponible.findOne({
        where: { barbero_id, fecha, hora }
    });

    if (horarioExistente) {
        throw new Error('Ya existe un horario registrado para este barbero en la misma fecha y hora');
    }

    return body;
};


module.exports = {
    crearHorario,
    eliminarHorario,
    actualizarHorario,
    obtenerHorarios,
    obtenerHorarioPorId
}
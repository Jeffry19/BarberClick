const sequelize = require('../config/db');
const Usuario = require('./usuario');
const Cita = require('./citas');
const HorarioDisponible = require('./horarioDisponibles');

// Relación un usuario puede tener muchas citas
Usuario.hasMany(Cita, { foreignKey: 'usuario_id', as: 'citas' });
Cita.belongsTo(Usuario, { foreignKey: 'usuario_id', as: 'Usuarios' });

//Un horario puede tener muchas citas
HorarioDisponible.hasMany(Cita, { foreignKey: 'horario_id', as: 'citas' });
Cita.belongsTo(HorarioDisponible, { foreignKey: 'horario_id', as: 'horarios' });


// Relación de un barbero con sus horarios disponibles
Usuario.hasMany(HorarioDisponible, { foreignKey: 'barbero_id', as: 'horarios' });
HorarioDisponible.belongsTo(Usuario, { foreignKey: 'barbero_id', as: 'Usuarios' });

module.exports = {
  sequelize,
  Usuario,
  Cita,
  HorarioDisponible,
};

const sequelize = require('../config/db');
const Usuario = require('./usuario');
const Cita = require('./citas');
const HorarioDisponible = require('./horarioDisponibles');

// Relación citas: cliente - barbero
Usuario.hasMany(Cita, { foreignKey: 'cliente_id', as: 'citasCliente' });
Usuario.hasMany(Cita, { foreignKey: 'barbero_id', as: 'citasBarbero' });

Cita.belongsTo(Usuario, { foreignKey: 'cliente_id', as: 'cliente' });
Cita.belongsTo(Usuario, { foreignKey: 'barbero_id', as: 'barbero' });

// Relación horarios disponibles
Usuario.hasMany(HorarioDisponible, { foreignKey: 'barbero_id', as: 'horarios' });
HorarioDisponible.belongsTo(Usuario, { foreignKey: 'barbero_id', as: 'barbero' });

module.exports = {
  sequelize,
  Usuario,
  Cita,
  HorarioDisponible,
};

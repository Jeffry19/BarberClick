const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const HorarioDisponible = sequelize.define('HorarioDisponible', {
  dia: {
    type: DataTypes.ENUM('lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'),
    allowNull: false,
  },
  hora_inicio: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  hora_fin: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  timestamps: true,
  tableName: 'horarios_disponibles',
});

module.exports = HorarioDisponible;

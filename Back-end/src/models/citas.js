const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Cita = sequelize.define('Cita', {
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  horario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },  
  estado: {
    type: DataTypes.ENUM('pendiente', 'confirmada', 'cancelada', 'completada'),
    defaultValue: 'pendiente',
  },
}, {
  timestamps: true,
  tableName: 'citas',
});

module.exports = Cita;

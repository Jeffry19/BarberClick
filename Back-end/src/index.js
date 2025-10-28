const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/db');
const usuarioRoutes = require('./routes/usuarioRoutes');
const horarioRoutes = require('./routes/horarioRoutes');
const citaRoutes = require('./routes/citaRoutes');
const path = require('path');


dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


// Sincronizar la base de datos
app.use('/usuario', usuarioRoutes);
app.use('/horario', horarioRoutes);
app.use('/cita', citaRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Bienvenido a TurnoFino API');
});



app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

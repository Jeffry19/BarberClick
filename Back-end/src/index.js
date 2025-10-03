const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/db');
const usuarioRoutes = require('./routes/usuarioRoutes');
const path = require('path');


dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


// Sincronizar la base de datos
app.use('/usuario', usuarioRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Bienvenido a TurnoFino API');
});

// Probar conexión a DB y arrancar servidor
sequelize.authenticate()
  .then(() => {
    console.log('✅ Conectado a la base de datos MySQL');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Error al conectar a la base de datos:', err);
  });

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

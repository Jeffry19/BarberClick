const bcrypt = require('bcryptjs');
const { Usuario } = require('../models');

const crearUsuario = async (req, res) => {
  try {
    const { nombre, telefono, email, rol, contrasena } = req.body;
    
    if (validarDatos()) {
        throw new Error('Datos invalidos');



    }else if (await existUsuarioTelefon(telefono)){
        throw new Error('El telefono ya está en uso')

    }else{
        const hashedPassword = await bcrypt.hash(contrasena, 10);
        const nuevoUsuario = await Usuario.create({
            nombre,
            telefono,
            email,
            rol,
            contrasena: hashedPassword,
        });
        await nuevoUsuario.save();
        res.status(201).json({ message: 'Usuario creado exitosamente', usuario: nuevoUsuario });
        
    }

 

  }catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).json({ message: 'Error al crear usuario' });
  }
};

const validarDatos = async (req, res) => {

    if (!nombre) throw new Error('El nombre es obligatorio');
    if (!telefono) throw new Error('El telefono es obligatorio');
    if (!rol) throw new Error('El rol es obligatorio');
    if (!contrasena) throw new Error('La contrasena es obligatoria');

}

 async function existUsuarioTelefon(telefono) {
    const usuario = await Usuario.findOne({ where: { telefono } });
    if (usuario) {
        throw new Error('El telefono ya está en uso');
    }
 }

//  const clienteLogin = async (req, res) => {      
//     try {
//         const { telefono} = req.body;
//         const usuario = await Usuario.findOne({ where: { telefono } });
        
//     } catch (error) {
//         console.error('Error en login:', error);
//         res.status(500).json({ message: 'Error en login' });
//     }
//  }

const obtenerUsuarios = async (req, res) => {

    try {
        const usuarios = await Usuario.findAll();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ message: 'Error al obtener usuarios' });
    }
}


const obtenerUsuarioPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(usuario);
        
    } catch (error) {
        console.error('Error al obtener usuario:', error);
        res.status(500).json({ message: 'Error al obtener usuario' });
    }
}

const eliminarUsuario = async (req, res) => {

    try {
        const { id } = req.params;
        const usuario = await Usuario.findByPk(id)

        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        await Usuario.destroy(id);
        res.status(200).json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).json({ message: 'Error al eliminar usuario' });
    }
}

  const editarUsuario = async (req, res) => { 
    try {
        const { id } = req.params;
        const { nombre, telefono, email, rol, contrasena } = req.body;
        const usuario = await Usuario.findById(id)

        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        if (validarDatos()) {
            throw new Error('Datos invalidos');
        }
        await Usuario.save();
        res.status(200).json({ message: 'Usuario actualizado exitosamente', usuario });

        
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar usuario' });
        console.error('Error al actualizar usuario:', error);
    }
}
    


 module.exports = {
  crearUsuario,
    obtenerUsuarios,
    obtenerUsuarioPorId,
    eliminarUsuario,
    editarUsuario
  
    // clienteLogin
};
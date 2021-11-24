const express = require('express')
const router = express.Router();
const pacientesController = require('../controllers/PacientesController');

module.exports = function(){
  
  // Agregar nuevos pacientes por POST
  router.post('/pacientes',pacientesController.nuevoCliente );

  // Obtener registros 
  router.get('/getPacientes',pacientesController.getPacientes);

  // Obtener registro por id 
  router.get('/getPaciente/:id_paciente',pacientesController.getPaciente);

  // Actualizar un registros
  router.put('/pacientes/:id_paciente',pacientesController.update);
  
  // Eliminar un registros
  router.delete('/pacientes/:id_paciente',pacientesController.delete);
  
  return router;
}
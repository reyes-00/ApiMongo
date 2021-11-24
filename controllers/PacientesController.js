const Paciente = require('../models/Paciente');

// Cuando se crea un nuevo clientes
exports.nuevoCliente = async (req, res, next) => {
  // Ver los valores que se mandan en post
  // console.log(req.body);

  // insertar en la base de datos
  const pacientes = new Paciente(req.body);
  try{
    await pacientes.save()
    res.json({ mensaje: "Agregado correctamente"});
  }catch(err){
    console.log(err)
    next();
  }
  
}

exports.getPacientes = async(req, res, next)=>{
  try{
    const pacientes = await Paciente.find();
    res.json(pacientes);
  }catch(err){
    console.log(err);
    next();
  }
}

exports.getPaciente = async(req, res, next) => {
  const paciente = await Paciente.findById(req.params.id_paciente);
  try{
    res.json(paciente);
  }catch(err){
    console.error(err);
  }
}

exports.update = async (req, res,next) => {
  try{
    const pacientes = await Paciente.findOneAndUpdate({_id: req.params.id_paciente},req.body,{new:true});
    res.json(pacientes);
  }catch(err){
    console.log(err)
    next();
  }
}

exports.delete = async(req, res, next)=>{
  try{
    await Paciente.findOneAndDelete({_id: req.params.id_paciente})
    res.json({mensame: 'Borrado correctamente'})
  }catch(err){
    console.log(err)
    next();
  }
}
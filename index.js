const express =require('express');
// importar mongo 
const mongoose = require('mongoose');
// rutas
const routes = require('./routes/routes');
const bodyParser = require('body-parser');

// crear servidor
const app = express();
// conectar a mongo
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/veterinaria',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false

})
// habilitar bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// habilitar router for
app.use('/', routes())


app.listen(4000,()=>{
  console.log("Servidor funcionando")
});

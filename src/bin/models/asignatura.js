const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const asignaturaSchema = new Schema({
  name: String,
  int_horaria: String,
  unidades: String,
  email: String,
  
  
});

var asignatura = mongoose.model("asignatura", asignaturaSchema);
module.exports = asignatura;

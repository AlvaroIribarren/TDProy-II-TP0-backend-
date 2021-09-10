const mongoose = require('mongoose');

const vaccineSchema = mongoose.Schema({
  FECHA_ADMINISTRACION: {
    type: String,
  },
  GRUPO_ETARIO: {
    type: String,
  },
  GENERO: {
    type: String,
  },
  VACUNA: {
    type: String,
  },
  TIPO_EFECTOR: {
    type: String,
  },
  DOSIS_1: {
    type: String,
  },
  DOSIS_2: {
    type: String,
  },
  ID_CARGA: {
    type: String,
  },
});

const Vaccine = mongoose.model('Vaccine', vaccineSchema)
module.exports = Vaccine;

const mongoose = require('mongoose');
const { paginate } = require('./plugins');

const vaccineSchema = mongoose.Schema({
  FECHA_ADMINISTRACION: {
    type: Date,
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
    type: Number,
  },
  DOSIS_2: {
    type: Number,
  },
  ID_CARGA: {
    type: String,
  },
});

vaccineSchema.plugin(paginate)

const Vaccine = mongoose.model('Vaccine', vaccineSchema)
module.exports = Vaccine;

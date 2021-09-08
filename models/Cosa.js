const mongoose = require('mongoose')

const cosaSchema = new mongoose.Schema({
  description: String,
  booleano: Boolean
})

module.exports.Cosa = mongoose.model('Cosa', cosaSchema)
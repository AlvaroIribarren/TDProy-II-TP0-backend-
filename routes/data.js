var express = require('express');
var router = express.Router();
const csv = require('csv-parser')
const DATASET_URL = "https://cdn.buenosaires.gob.ar/datosabiertos/datasets/salud/plan-de-vacunacion-covid-19/dataset_total_vacunas.csv"
let data = [];
//FECHA_ADMINISTRACION, GRUPO_ETARIO, GENERO, VACUNA, TIPO_EFECTOR, DOSIS_1, DOSIS_2, ID_CARGA

var https = require("https"); 
https.request(DATASET_URL, response => { //Make request to URL
  response.pipe(
    csv({
      trim: true,
      columns: true,
      delimiter: ',',
      skip_empty_lines: true
    })
  ).on('data', row => {
    data.push(row)
  }).on('end', function(){
    console.log("Carga terminada, hay un total de " + data.length + " filas.")
  })
}).end();

function filterPublicos(rows) {
  return rows.filter(row => row.TIPO_EFECTOR === 'Público');
}

function filterPrivados(rows) {
  return rows.filter(row => row.TIPO_EFECTOR === 'Privado');
}

router.get('/', function(req, res, next) {  
  res.send(data)
});

router.get('/privados', function(req, res, next) {
  const privados = filterPrivados(data)
  res.send(privados)
})

router.get('/publicos', function(req, res, next) {
  const publicos = filterPublicos(data)
  res.send(publicos)
})

// router.get('/dosis1_sum', function(req, res, next) {
//   let sum = data.reduce((acum, row) => {
//     return acum + parseInt(row.DOSIS_1);
//   })
//   console.log(sum)
//   res.status(200).send(sum)
// })

module.exports = router;

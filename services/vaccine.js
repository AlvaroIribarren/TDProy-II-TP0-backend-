const csv = require('csv-parser')
const https = require("https"); 
const { Vaccine } = require('../models');
const buildQuery = require('../queries/vaccines.query')

class VaccinesDataService {

  async find(filter) {
    try {
      const query = buildQuery(filter)
      const res = await Vaccine.find(query)
      return res
    } catch (err) {
      console.log(err)
    }
  }

  async loadFromUrl(url) {
    const data = []
    https.request(url, response => {
      response.pipe(
        csv({
          trim: true,
          columns: true,
          delimiter: ',',
          skip_empty_lines: true
        })
      ).on('data', row => {
        const formattedRow = formatRow(row);
        data.push(formattedRow)
      }).on('end', async function() {
        await Vaccine.deleteMany({});
        await Vaccine.insertMany(data);
        console.log("Carga terminada, hay un total de " + data.length + " filas.")
      })
    }).end();
  }
}

const formatRow = (row) => {
  //Current format: DDMMMYYYY:00:00:00 (hour always the same)
  const { FECHA_ADMINISTRACION ,...rest} = row;
  const day = FECHA_ADMINISTRACION.substring(0, 2);
  const month = FECHA_ADMINISTRACION.substring(2, 5);
  const year = FECHA_ADMINISTRACION.substring(5, 9);
  return {
    FECHA_ADMINISTRACION: new Date(`${year}-${month}-${day}`),
    ...rest
  }
}

const vaccinesDataService = new VaccinesDataService()
module.exports = vaccinesDataService;
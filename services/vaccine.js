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
        data.push(row)
      }).on('end', async function() {
        await Vaccine.deleteMany({});
        await Vaccine.insertMany(data);
        console.log("Carga terminada, hay un total de " + data.length + " filas.")
      })
    }).end();
  }
}

const vaccinesDataService = new VaccinesDataService()
module.exports = vaccinesDataService;
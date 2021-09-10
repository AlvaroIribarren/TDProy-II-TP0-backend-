module.exports = function (filter) {
  let query = {}
  if (filter.vaccine) {
    query.VACUNA = filter.vaccine
  }
  
  return query
};
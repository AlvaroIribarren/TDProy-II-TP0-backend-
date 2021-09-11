module.exports = function (filter) {
  let query = {}
  if (filter.vaccine) {
    query.VACUNA = filter.vaccine
  }
  if (filter.gender) {
    query.GENERO = filter.gender
  }
  if (filter.type) {
    query.TIPO_EFECTOR = filter.type
  }
  if (filter.ageGroup) {
    query.GRUPO_ETARIO = filter.ageGroup
  }
  if (filter.from && filter.to) {
    query.FECHA_ADMINISTRACION = {
      $gte: new Date(filter.from),
      $lte: new Date(filter.to)
    }
  } else {
    if (filter.from) {
      query.FECHA_ADMINISTRACION = {
        $gte: new Date(filter.from)
      }
    }
    if (filter.to) {
      query.FECHA_ADMINISTRACION = {
        $lte: new Date(filter.to)
      }
    }
  }
  
  return query
};
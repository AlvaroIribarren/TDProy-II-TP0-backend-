module.exports = function (filter) {
  let query = {}
  if (filter.TIPO_EFECTOR) {
    query.TIPO_EFECTOR = filter.TIPO_EFECTOR
  }
  return query
};
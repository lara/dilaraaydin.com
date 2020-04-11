const { format } = require("date-fns")

module.exports = function formatDate(value, formatString) {
  return format(value, formatString)
}

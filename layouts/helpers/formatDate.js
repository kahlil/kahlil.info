const moment = require('moment');

module.exports = function formateDate(datetime, format) {
  if (moment) {
    return moment(datetime).format(format);
  }

  return datetime;
};

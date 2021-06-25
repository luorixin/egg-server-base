'use strict';
const _ = require('lodash');
const moment = require('moment');

module.exports = {
  _,
  // 日期格式化
  formatToDay(date = new Date()) {
    return moment.format(date, 'YYYY-MM-DD');
  },
  formatToDayNoYear(date = new Date()) {
    return moment.format(date, 'MM-DD');
  },
  formatToDayStart(date = new Date()) {
    return moment.format(date, 'YYYY-MM-DD 00:00:00');
  },
  formatToDayEnd(date = new Date()) {
    return moment.format(date, 'YYYY-MM-DD 23:59:59');
  },
  formatToDayTime(date = new Date()) {
    return moment.format(date, 'YYYY-MM-DD HH:mm:ss');
  },
};

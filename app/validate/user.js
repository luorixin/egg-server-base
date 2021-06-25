'use strict';
module.exports = app => {

  const { validator } = app;

  // 校验用户名是否正确
  validator.addRule('userName', (rule, value) => {
    if (/^\d+$/.test(value)) {
      return '名字必须是字符串';
    } else if (value.length < 3 || value.length > 12) {
      return '名字的长度必须在3-12之间';
    }
  });
};

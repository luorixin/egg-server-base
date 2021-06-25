'use strict';

const db = require('../db');
const schema = require('../schema/role');

module.exports = app => {
  const Role = db.defineModel(app, 'role', schema);
  // 这里定义与 users 表的关系，一个角色可以含有多个用户，外键相关
  Role.associate = () => {
    app.model.Role.hasMany(app.model.User, { as: 'user' });
  };
  return Role;
};

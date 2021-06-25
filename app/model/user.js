'use strict';

const db = require('../db');
const schema = require('../schema/user');

module.exports = app => {
  const User = db.defineModel(app, 'user', schema);
  User.associate = () => {
    app.model.User.belongsTo(app.model.Role, { as: 'role', foreignKey: 'role_id' });
  };
  return User;
};

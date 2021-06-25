'use strict';

const uuidv1 = require('uuid');

function generateUUID() {
  return uuidv1().replace(/-/g, '');
}

function defineModel(app, name, attributes) {
  const { UUID } = app.Sequelize;
  const attrs = {};
  attrs.id = {
    type: UUID,
    primaryKey: true,
    defaultValue: () => {
      return generateUUID();
    },
  };
  for (const key in attributes) {
    const value = attributes[key];
    if (typeof value === 'object' && value.type) {
      value.allowNull = value.allowNull && true;
      attrs[key] = value;
    } else {
      attrs[key] = {
        type: value,
        allowNull: true,
      };
    }
  }
  return app.model.define(name, attrs, {
    created_at: 'created_at',
    updated_at: 'updated_at',
    version: true,
    underscored: true,
    freezeTableName: true,
  });
}

module.exports = { defineModel };

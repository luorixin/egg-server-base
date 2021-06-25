'use strict';

module.exports = app => {
  const { STRING, TEXT } = app.Sequelize;
  return {
    name: {
      type: STRING(20),
      comment: '角色名称',
    },
    permissions: {
      type: TEXT,
      comment: '角色权限',
    },
    memo: {
      type: STRING(20),
      comment: '备注',
    },
  };
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING, INTEGER, DATE, TEXT, UUID } = Sequelize;
    await queryInterface.createTable('role', {
      id: {
        type: UUID,
        primaryKey: true,
        allowNull: false,
        comment: '用户ID',
      },
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
      created_at: {
        type: DATE,
        comment: '创建时间',
      },
      updated_at: {
        type: DATE,
        comment: '修改时间',
      },
      version: {
        type: INTEGER(11),
      },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('role');
  },
};

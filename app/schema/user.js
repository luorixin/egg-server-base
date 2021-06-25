'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  return {
    ip: {
      type: STRING(20),
      comment: '用户IP',
      validate: {
        isIP: true,
      },
    },
    username: {
      type: STRING(20),
      comment: '用户姓名',
    },
    password: {
      type: STRING(16),
      comment: '用户密码',
    },
    email: {
      type: STRING(30),
      unique: true,
      comment: '用户邮箱',
      validate: {
        isEmail: true,
      },
    },
    avatar: {
      type: STRING(255),
      comment: '用户头像',
    },
    registration: {
      type: DATE,
      comment: '用户注册时间',
    },
    birthday: {
      type: DATE,
      comment: '用户生日',
    },
    age: {
      type: INTEGER(4),
      comment: '用户年龄',
    },
    phone: {
      type: INTEGER(11),
      comment: '用户手机',
    },
    nickname: {
      type: STRING(20),
      comment: '用户昵称',
    },
    status: {
      type: INTEGER(1),
      defaultValue: 1,
      comment: '用户状态: 1 正常； 0 禁用',
    },
  };
};

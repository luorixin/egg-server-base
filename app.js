'use strict';

const path = require('path');

// Sync model to db
// We strongly recommend you to use Sequelize - Migrations to create or migrate database.
// This code should only be used in development.
// {app_root}/app.js
module.exports = app => {
  // if (app.config.env === 'local' || app.config.env === 'unittest') {
  //   app.beforeStart(async () => {
  //     await app.model.sync({ force: true });
  //   });
  // }
  // 加载所有的校验规则
  const directory = path.join(app.config.baseDir, 'app/validate');
  app.loader.loadToApp(directory, 'validate');
};


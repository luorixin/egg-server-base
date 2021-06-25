/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1624591734470_9056';

  // add your middleware config here
  config.middleware = [];

  config.errorHandler = {
    match: '/',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    multipart: {
      mode: 'file',
    },
    security: {
      csrf: {
        enable: false,
        ignoreJSON: true,
      },
      domainWhiteList: [ '*' ],
    },
    cors: {
      origin: '*',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
      credentials: true,
    },
    mysql: {
      // 单数据库信息配置
      client: {
        // host
        host: '127.0.0.1',
        // 端口号
        port: 3306,
        // 用户名
        user: 'root',
        // 密码
        password: '123456',
        // 数据库名
        database: 'egg-server-base',
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    },
    sequelize: {
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      database: 'egg-server-base',
      username: 'root',
      password: '123456',
      operatorsAliases: false,
      timezone: '+08:00', // 保存为本地时区,
      dialectOptions: {
        dateStrings: true,
        typeCast(field, next) {
          // for reading from database
          if (field.type === 'DATETIME') {
            return field.string();
          }
          return next();
        },
      },
    },
    jwt: {
      enable: true,
      secret: 'z123456qwertzzz',
      match: '/jwt',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};

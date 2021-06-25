'use strict';
module.exports = app => {
  const { router, controller, jwt } = app;
  // 登录
  router.post('/api/login', controller.login.login);
  // 登出
  router.post('/api/logout', controller.login.logout);


  // 获取用户信息
  router.get('/api/userInfo', jwt, controller.login.userInfo);
  // 用户管理
  router.resources('users', '/api/v1/users', jwt, controller.user);
  // 角色管理
  router.resources('roles', '/api/v1/roles', jwt, controller.role);
};

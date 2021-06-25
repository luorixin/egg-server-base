'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login() {
    const { ctx } = this;
    // ctx.validate(createRule, ctx.request.body);
    const { username, password } = ctx.request.body;
    const token = await ctx.service.user.login({ username, password });
    this.ctx.helper.success(ctx, { msg: '登录成功', res: token });
  }

  async userInfo() {
    const ctx = this.ctx;
    const token = ctx.request.header['x-token'];
    // { id, exp, iat }
    const { data: { id } } = ctx.app.jwt.decode(token);
    const userInfo = await ctx.service.user.getUser(id);
    this.ctx.helper.success(ctx, { msg: '获取用户信息成功', res: userInfo });
  }
  async logout() {
    const ctx = this.ctx;
    const token = ctx.request.header['x-token'];
    if (token) {
      this.ctx.helper.success(ctx, { msg: '登出成功' });
    } else {
      this.ctx.helper.fail(ctx, { msg: '你已经登出' });
    }
  }
}

module.exports = LoginController;

'use strict';

const Service = require('egg').Service;

class ActionTokenService extends Service {
  async apply(user) {
    const { ctx } = this;
    return ctx.app.jwt.sign({
      data: {
        id: user.id,
        name: user.name,
        role: user.role.name,
        avatar: user.avatar,
      },
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7),
    }, ctx.app.config.jwt.secret);
  }
}

module.exports = ActionTokenService;

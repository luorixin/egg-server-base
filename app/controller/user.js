'use strict';

const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则
const createRule = {
  username: {
    required: true,
    type: 'userName',
  },
  password: 'password',
  email: 'email',
  age: {
    type: 'number', // 年龄范围0-120
    required: false,
    min: 0,
    max: 120,
  },
};

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    const { query, model, service, helper } = ctx;
    const options = {
      limit: helper.parseInt(query.limit),
      offset: helper.parseInt(query.offset),
      include: [{
        model: model.Role,
        as: 'role',
        attributes: [ 'id', 'name' ],
      }],
    };
    const data = await service.user.list(options);
    ctx.helper.success(ctx, { res: {
      count: data.count,
      items: data.rows,
    } });
  }

  async show() {
    const { ctx } = this;
    const { params, service, helper } = ctx;
    const id = helper.parseInt(params.id);
    const res = await service.user.find(id);
    ctx.helper.success(ctx, { res });
  }

  async create() {
    const { ctx } = this;
    const { service, helper } = ctx;
    const body = ctx.request.body;
    ctx.validate(createRule, body);
    body.password = helper.encryptPwd(body.password);
    const role = await service.user.create(body);
    ctx.helper.success(ctx, { msg: '用户信息创建成功', res: role });
  }

  async update() {
    const { ctx } = this;
    const { params, service, helper } = ctx;
    const body = ctx.request.body;
    const id = helper.parseInt(params.id);
    const res = await service.user.update({
      id,
      updates: body,
    });
    ctx.helper.success(ctx, { res });
  }

  async destroy() {
    const { ctx } = this;
    const { params, service, helper } = ctx;
    const id = helper.parseInt(params.id);
    await service.user.destroy(id);
    ctx.helper.success(ctx);
  }
}

module.exports = UserController;

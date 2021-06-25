'use strict';

const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则
const createRule = {
  name: {
    required: true,
    type: 'userName',
  },
  permissions: {
    require: true,
  },
};

class RoleController extends Controller {
  async index() {
    const { ctx } = this;
    const { query, service, helper } = ctx;
    const options = {
      limit: helper.parseInt(query.limit),
      offset: helper.parseInt(query.offset),
    };
    const data = await service.role.list(options);
    ctx.helper.success(ctx, { res: {
      count: data.count,
      items: data.rows,
    } });
  }

  async show() {
    const { ctx } = this;
    const { params, service, helper } = ctx;
    const id = helper.parseInt(params.id);
    const res = await service.role.find(id);
    ctx.helper.success(ctx, { res });
  }

  async create() {
    const { ctx } = this;
    const { service } = ctx;
    const body = ctx.request.body;
    ctx.validate(createRule, body);
    const role = await service.role.create(body);
    ctx.helper.success(ctx, { msg: '角色信息创建成功', res: role });
  }

  async update() {
    const { ctx } = this;
    const { params, service, helper } = ctx;
    const body = ctx.request.body;
    const id = helper.parseInt(params.id);
    const res = await service.role.update({
      id,
      updates: body,
    });
    ctx.helper.success(ctx, { res });
  }

  async destroy() {
    const { ctx } = this;
    const { params, service, helper } = ctx;
    const id = helper.parseInt(params.id);
    await service.role.destroy(id);
    ctx.helper.success(ctx);
  }
}

module.exports = RoleController;

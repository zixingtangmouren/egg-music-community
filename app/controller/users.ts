/**
 * @Author: tangzhicheng
 * @Date: 2021-03-03 09:16:35
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-04-08 11:41:50
 * @Description: file content
 */

import Controller from './base'

const upRule = {
  username: 'usr',
  password: 'psd',
}

const baseRule = {
  sex: 'number',
  borthday: 'date',
}

export default class UsersController extends Controller {

  public async login() {
    const body = this.ctx.request.body
    this.ctx.validate(upRule, body)
    const result = await this.service.users.login(body)
    this.success(result)
  }

  public async loginOut() {
    await this.service.users.loginOut()
    this.success('退出成功！')
  }

  public async register() {
    const body = this.ctx.request.body
    this.ctx.logger.info(body)
    this.ctx.validate({ ...upRule, ...baseRule }, body)
    await this.service.users.registerUser(body)
    this.success('注册成功！')
  }

  public async userInfo() {
    const id = this.ctx.params.id || this.ctx.state.userInfo.id
    const user = await this.service.users.getUserInfo(id)

    this.success(user)
  }

  public async findSimilarPeole() {
    const result = await this.service.musicLabels.findSimilarLabelPeole()
    this.success(result)
  }
}

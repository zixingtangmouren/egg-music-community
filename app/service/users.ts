/**
 * @Author: tangzhicheng
 * @Date: 2021-03-03 09:08:37
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-04-08 16:54:08
 * @Description: file content
 */

import { Service } from 'egg'
import { UserAttributes } from '../model/users'
import * as jwt from 'jsonwebtoken'
import { MusicLabels } from '../model/musicLabels'

export interface D extends UserAttributes {
  address?: string[]
  musicLabel: MusicLabels
}


export default class Users extends Service {
  public async findUser(username: string, password?: string) {
    const where: any = {
      username,
    }
    if (password) {
      where.password = password
    }
    return await this.ctx.model.Users.findOne({
      where,
    })
  }

  public async getUserInfo(id: number) {
    const user = await this.ctx.model.Users.findOne({
      attributes: {
        exclude: [ 'password' ],
      },
      where: { id },
    })

    if (user === null) {
      throw new Error('该用户不存在！')
    }

    const [ addressInfo, musicLabel ] = await Promise.all([
      this.service.address.findUserAddress(user.id),
      this.service.musicLabels.findMusicLabel(user.id),
    ])

    const result:any = { ...(user.toJSON()) }

    result.addressInfo = addressInfo
    result.musicLabel = musicLabel


    return result
  }

  public async login({ username, password }: { username: string, password: string }): Promise<any> {
    const result = await this.findUser(username, password)
    if (result === null) {
      throw new Error('账号密码不正确！')
    }
    const id = result.id
    const userInfo = {
      id,
      username,
    }
    return {
      id,
      token: this.createToken(userInfo),
    }
  }

  public async loginOut() {
    this.ctx.session.isLogin = false
    this.ctx.session.userInfo = null
  }

  public async registerUser(data: D) {
    const result = await this.findUser(data.username)
    const createTask: Promise<any>[] = []
    if (result !== null) {
      throw new Error('该用户名已经存在！')
    }
    const user = await this.ctx.model.Users.create(data)
    if (data.address) {
      createTask.push(this.service.address.createUserAddressInfo(data.address, user.id))
    }

    if (data.musicLabel) {
      createTask.push(this.service.musicLabels.createMusicLabel(data.musicLabel, user.id))
    }

    await Promise.all(createTask)

    return user
  }


  public createToken(data): string {
    return jwt.sign(data, 'my_token', {
      expiresIn: '24h',
    })
  }
}

/**
 * @Author: tangzhicheng
 * @Date: 2021-03-21 14:02:04
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-31 09:33:07
 * @Description: file content
 */


import { Context } from 'egg'
import * as jwt from 'jsonwebtoken'
import { Fail } from '../controller/base'

const tokenErrMsg = (msg: string): string => {
  if (msg === 'jwt expired') {
    return '登录过期，请重新登录！'
  }
  return msg
}

export default () => {
  return async (ctx: Context, next) => {
    try {
      if (!ctx.headers.authorization) {
        throw new Error('请先登录！')
      }
      const token = (ctx.headers.authorization as string).split(' ')[1]
      const user = jwt.verify(token, 'my_token')
      ctx.state.userInfo = user
      await next()
    } catch (error) {
      ctx.status = 401
      ctx.body = new Fail(tokenErrMsg(error.message))
    }
  }
}

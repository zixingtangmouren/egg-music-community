/**
 * @Author: tangzhicheng
 * @Date: 2021-04-06 16:42:38
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-04-08 10:56:44
 * @Description: file content
 */
import { Context } from 'egg'
import { Fail } from '../controller/base'

export default () => {
  return async (ctx: Context, next) => {
    await next()
    if (ctx.status === 404 && !ctx.body) {
      ctx.status = 404
      ctx.body = new Fail('Not Found')
    }
  }
}

/**
 * @Author: tangzhicheng
 * @Date: 2021-03-19 23:36:01
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-20 11:33:06
 * @Description: file content
 */

import { Context } from 'egg'
import { Fail } from '../controller/base'


export default () => {
  return async (ctx: Context, next) => {
    const now = Date.now()
    const preVisitTime = ctx.session.preVisitTime || 0
    ctx.session.preVisitTime = now

    if (now - preVisitTime < 200) {
      return (ctx.body = new Fail('操作频繁！'))
    }

    await next()
  }
}

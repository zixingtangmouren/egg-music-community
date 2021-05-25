/**
 * @Author: tangzhicheng
 * @Date: 2021-03-19 21:41:30
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-19 22:21:11
 * @Description: file content
 */
import * as assert from 'assert'
import { Context } from 'egg'
import { app } from 'egg-mock/bootstrap'

describe('test/app/service/Test.test.js', () => {
  let ctx: Context

  before(async () => {
    ctx = app.mockContext()
  })

  it('sayHi', async () => {
    const result = await ctx.service.test.sayHi('egg')
    assert(result === 'hi, egg')
  })
})

/**
 * @Author: tangzhicheng
 * @Date: 2021-03-19 22:57:20
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-19 23:05:36
 * @Description: file content
 */

import { Application } from 'egg'

export default (app: Application) => {
  app.validator.addRule('usr', (_rule, value) => {
    const reg = /^[a-zA-Z][a-zA-Z0-9]{7,23}$/
    if (!reg.test(value)) {
      return '用户名不符合要求！'
    }
  })

  app.validator.addRule('psd', (_rule, value) => {
    const reg = /^[_a-zA-Z][a-zA-Z0-9_]{7,23}$/
    if (!reg.test(value)) {
      return '密码不符合要求！'
    }
  })
}

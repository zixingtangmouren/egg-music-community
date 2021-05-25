/**
 * @Author: tangzhicheng
 * @Date: 2021-04-08 16:44:13
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-04-08 16:53:43
 * @Description: file content
 */


import { Application } from 'egg'

export default (app: Application) => {
  app.validator.addRule('title', (_rule, value) => {
    const title = value.toString()
    if (title.length > 240) {
      return '标题不能超过240个字！'
    }
  })

}


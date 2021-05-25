/**
 * @Author: tangzhicheng
 * @Date: 2021-03-03 13:58:40
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-21 14:30:05
 * @Description: file content
 */


import { Application } from 'egg'
import * as path from 'path'


export default (app: Application) => {
  app.once('server', () => {
    app.logger.info('server is running')
  })


  const directory = path.join(app.config.baseDir, 'app/validate')
  app.loader.loadToApp(directory, 'validate')

}

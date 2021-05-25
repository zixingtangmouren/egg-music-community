/**
 * @Author: tangzhicheng
 * @Date: 2021-03-03 09:08:37
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-23 14:09:13
 * @Description: file content
 */
import { EggPlugin } from 'egg'

const plugin: EggPlugin = {
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  security: {
    enable: false,
  },
  // redis: {
  //   enable: true,
  //   package: 'egg-redis',
  // },
  // sessionRedis: {
  //   enable: true,
  //   package: 'egg-session-redis',
  // },
}

export default plugin

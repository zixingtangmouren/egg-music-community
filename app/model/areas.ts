/**
 * @Author: tangzhicheng
 * @Date: 2021-03-31 09:23:41
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-31 10:22:42
 * @Description: file content
 */

import { Application } from 'egg'

export interface AreaItem {
  id: number
  name: string
  code: string
  parent_code: string
}

export default (app: Application) => {
  const Sequelize = app.Sequelize
  return app.model.define<any, AreaItem>('areas', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: Sequelize.STRING,
    code: Sequelize.STRING,
    parent_code: Sequelize.STRING,
  }, {
    freezeTableName: true,
    createdAt: 'create_time',
    updatedAt: 'update_time',
  })
}


/**
 * @Author: tangzhicheng
 * @Date: 2021-03-30 23:30:01
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-30 23:34:30
 * @Description: file content
 */
import { Application } from 'egg'

export interface ProvinceItem {
  id: number
  name: string
  code: string
}

export default (app: Application) => {
  const Sequelize = app.Sequelize
  return app.model.define<any, ProvinceItem>('provinces', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: Sequelize.STRING,
    code: Sequelize.STRING,
  }, {
    freezeTableName: true,
    createdAt: 'create_time',
    updatedAt: 'update_time',
  })
}

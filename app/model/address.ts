/**
 * @Author: tangzhicheng
 * @Date: 2021-03-31 10:33:53
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-04-08 15:26:11
 * @Description: file content
 */

import { Application } from 'egg'
import { Model, Optional } from 'sequelize'

export interface AddressAttrbutes {
  id:number
  province: string
  province_code: string
  city: string
  city_code: string
  area: string
  area_code: string
  user_id: number
}

export interface AddressCreationAttributes extends Optional<AddressAttrbutes, 'id'> {}

export class Address extends Model<AddressAttrbutes, AddressCreationAttributes> implements AddressAttrbutes {
  id:number
  province: string
  province_code: string
  city: string
  city_code: string
  area: string
  area_code: string
  user_id: number
}

export default (app: Application) => {
  const Sequelize = app.Sequelize
  return app.model.define<Address>('address', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    province: Sequelize.STRING,
    province_code: Sequelize.STRING,
    city: Sequelize.STRING,
    city_code: Sequelize.STRING,
    area: Sequelize.STRING,
    area_code: Sequelize.STRING,
    user_id: Sequelize.STRING,
  }, {
    freezeTableName: true,
    createdAt: 'create_time',
    updatedAt: 'update_time',
  })
}

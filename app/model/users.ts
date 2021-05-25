/**
 * @Author: tangzhicheng
 * @Date: 2021-03-05 11:24:53
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-04-08 15:27:58
 * @Description: file content
 */

import { Application } from 'egg'
import * as moment from 'moment'
import { Model, Optional } from 'sequelize'

export class UserAttributes {
  id: number
  username: string
  password: string
  sex: number
  address_id?: number | null
  qq_number?: string | null
  wx_number?: string | null
  borthday: Date
  introduce?: string | null
  music_label_id?: number | null
}

export interface UsersCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class Users extends Model<UserAttributes, UsersCreationAttributes> implements UserAttributes {
  id: number
  username: string
  password: string
  sex: number
  address_id?: number | null
  qq_number?: string | null
  wx_number?: string | null
  borthday: Date
  introduce?: string | null
  music_label_id?: number | null
}


export default (app: Application) => {
  const Sequelize = app.Sequelize

  const Users = app.model.define<Users>('Users', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    username: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    sex: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    qq_number: Sequelize.STRING(20),
    wx_number: Sequelize.STRING(20),
    borthday: {
      type: Sequelize.DATE,
      allowNull: false,
      get() {
        return moment(this.getDataValue('borthday')).format('YYYY-MM-DD')
      },
    },
    introduce: Sequelize.STRING(300),
  }, {
    freezeTableName: true,
    createdAt: 'create_time',
    updatedAt: 'update_time',
  })

  return Users
}

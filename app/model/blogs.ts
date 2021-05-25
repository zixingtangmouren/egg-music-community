/**
 * @Author: tangzhicheng
 * @Date: 2021-04-07 14:14:01
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-04-14 16:57:16
 * @Description: file content
 */

import { Application } from 'egg'
import * as moment from 'moment'
import { Model, Optional } from 'sequelize'

export interface BlogAttributes {
  id: number
  user_id: number
  username: string
  title: string
  content: string
  visi_count?: number
  create_time?: Date
  update_time?: Date
}

export interface BlogCreationAttributes extends Optional<BlogAttributes, 'id'> {}

export class Blogs extends Model<BlogAttributes, BlogCreationAttributes> implements BlogAttributes {
  user_id: number
  create_time: Date
  update_time: Date
  id: number
  username: string
  title: string
  content: string
  visi_count: number
}


export default (app: Application) => {
  const Sequelize = app.Sequelize
  const { INTEGER, STRING, TEXT, DATE } = Sequelize
  const Blogs = app.model.define<Blogs, BlogAttributes>('blogs', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: INTEGER, allowNull: false },
    username: {
      type: STRING(30),
      allowNull: false,
    },
    title: {
      type: STRING,
      allowNull: false,
    },
    content: TEXT,
    visi_count: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    create_time: {
      type: DATE,
      allowNull: false,
      defaultValue: new Date(),
      get() {
        return moment(this.getDataValue('create_time')).format('YYYY-MM-DD hh:mm:ss')
      },
    },
    update_time: {
      type: DATE,
      allowNull: false,
      defaultValue: new Date(),
      get() {
        return moment(this.getDataValue('update_time')).format('YYYY-MM-DD hh:mm:ss')
      },
    },
  }, {
    createdAt: false,
    updatedAt: false,
  })

  Blogs.prototype.associate = function() {
    app.model.Blogs.hasMany(app.model.Likes, {
      as: 'likes',
    })
  }

  return Blogs
}

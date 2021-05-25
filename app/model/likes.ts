/**
 * @Author: tangzhicheng
 * @Date: 2021-04-07 14:14:01
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-04-14 16:55:29
 * @Description: file content
 */

import { Application } from 'egg'
import { Model, Optional } from 'sequelize'

export interface LikeAttributes {
  id: number
  user_id: number
  blog_id: number
  create_time?: Date
  update_time?: Date
}

export interface LikeCreationAttributes extends Optional<LikeAttributes, 'id'> {}

export class Likes extends Model<LikeAttributes, LikeCreationAttributes> implements LikeAttributes {
  id: number
  user_id: number
  blog_id: number
}


export default (app: Application) => {
  const Sequelize = app.Sequelize
  const { INTEGER } = Sequelize
  const Likes = app.model.define<Likes, LikeAttributes>('likes', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: INTEGER, allowNull: false },
    blog_id: { type: INTEGER, allowNull: false },
  }, {
    createdAt: 'create_time',
    updatedAt: 'update_time',
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  Likes.associate = function() {
    app.model.Likes.belongsTo(app.model.Blogs, { as: 'blogs', foreignKey: 'blog_id' })
  }

  return Likes
}


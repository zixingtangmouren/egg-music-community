/**
 * @Author: tangzhicheng
 * @Date: 2021-04-02 12:40:59
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-04-12 10:29:49
 * @Description: file content
 */


import { Application } from 'egg'
import { Model, Optional } from 'sequelize'

export interface MusicLabelAttributes {
  id: number
  user_id: number
  singer?: string | string[]
  music_name?: string | string[]
  music_type?: string | string[]
}

export interface MusicLabelCreationAttributes extends Optional<MusicLabelAttributes, 'id'> {}

export class MusicLabels extends Model<MusicLabelAttributes, MusicLabelCreationAttributes> implements MusicLabelAttributes {
  id: number
  user_id: number
  singer?: string | string[]
  music_name?: string | string[]
  music_type?: string | string[]
}

export default (app: Application) => {
  const Sequelize = app.Sequelize
  const { INTEGER, STRING } = Sequelize
  return app.model.define<MusicLabels>('music_labels', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_id: INTEGER,
    singer: {
      type: STRING,
      get() {
        const singer = this.getDataValue('singer') as string
        return singer && singer.split(',')
      },
    },
    music_name: {
      type: STRING,
      get() {
        const music_name = this.getDataValue('music_name') as string
        return music_name && music_name.split(',')
      },
    },
    music_type: {
      type: STRING,
      get() {
        const music_type = this.getDataValue('music_type') as string
        return music_type && music_type.split(',')
      },
    },
  }, {
    createdAt: false,
    updatedAt: false,
  })
}

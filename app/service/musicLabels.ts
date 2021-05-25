/**
 * @Author: tangzhicheng
 * @Date: 2021-04-02 12:43:06
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-04-12 10:27:23
 * @Description: file content
 */


import { Service } from 'egg'
import { MusicLabels } from '../model/musicLabels'
import { Op, WhereOptions } from 'sequelize'


export const createConditions = (key: string, arr: string[]): any[] => {
  if (arr && arr.length !== 0) {
    return arr.map(it => ({
      [key]: {
        [Op.like]: `%${it}%`,
      },
    }))
  }
  return []
}

export default class MusicLabelsService extends Service {
  public async createMusicLabel(data: MusicLabels | null, user_id: number) {
    if (data === null) return null
    return await this.ctx.model.MusicLabels.create({
      ...data,
      user_id,
    })
  }

  public async findMusicLabel(id: number) {
    return await this.ctx.model.MusicLabels.findOne({ where: { user_id: id } })
  }

  public async findSimilarLabelPeole() {
    const musicLabel = await this.findMusicLabel(this.ctx.state.userInfo.id)
    if (musicLabel) {
      const where: WhereOptions<any> = {
        [Op.or]: [],
      }

      if (musicLabel.singer && musicLabel.singer.length > 0) {
        where[Op.or].push(...createConditions('singer', musicLabel.singer as string[]))
      }

      if (musicLabel.music_type && musicLabel.music_type.length > 0) {
        where[Op.or].push(...createConditions('music_type', musicLabel.music_type as string[]))
      }

      if (musicLabel.music_name && musicLabel.music_name.length > 0) {
        where[Op.or].push(...createConditions('music_name', musicLabel.music_name as string[]))
      }


      const userids = await this.ctx.model.MusicLabels.findAll({
        attributes: [ 'user_id' ],
        where,
      })

      const userIds = userids.map(it => it.user_id)

      const users = await this.ctx.model.Users.findAll({
        where: {
          id: userIds,
        },
      })

      return users
    }
    return []
  }
}

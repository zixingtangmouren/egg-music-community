/**
 * @Author: tangzhicheng
 * @Date: 2021-04-13 19:00:57
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-04-14 15:58:52
 * @Description: file content
 */

import { Service } from 'egg'


export default class LikesService extends Service {
  /**
   * 点赞
   * @param blog_id 博客id
   */
  public async giveTheThumbsUp(blog_id: number) {
    const user_id = this.ctx.state.userInfo.id
    const option = {
      user_id,
      blog_id,
    }
    await this.ctx.model.Likes.findOrCreate({
      where: option,
      defaults: option,
    })
  }

  /**
   * 取消点赞
   * @param blog_id 博客id
   */
  public async cancelLike(blog_id: number) {
    const user_id = this.ctx.state.userInfo.id
    const option = {
      user_id,
      blog_id,
    }
    await this.ctx.model.Likes.destroy({
      where: option,
    })
  }

  /**
   * 获取某条博客的点赞人数
   * @param blog_id 博客id
   * @return {Number} number
   */
  public async getBlogLikes(blog_id: number) {
    return await this.ctx.model.Likes.count({ where: { blog_id } })
  }

  /**
   * 获取某条博客点赞的人员信息
   * @param blog_id 博客id
   * @return {Number} number
   */
  public async getLikePersonList(blog_id: number) {
    return await this.ctx.model.Likes.findAll({
      where: { blog_id },
      include: [{
        model: this.ctx.model.Blogs,
        as: 'blogs',
        attributes: [ 'username' ],
      }],
    })
  }
}

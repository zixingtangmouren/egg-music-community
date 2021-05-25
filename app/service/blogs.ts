/**
 * @Author: tangzhicheng
 * @Date: 2021-04-07 14:09:51
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-04-14 16:53:19
 * @Description: file content
 */

import { Service } from 'egg'
import { Op } from 'sequelize'
import { BlogAttributes, Blogs } from '../model/blogs'


export interface SearchBlogsParmas {
  keyword?: string
}
export default class BlogsService extends Service {
  public async findOneBlog(id: number) {
    const task: [Promise<Blogs | null>, Promise<number>] = [
      this.ctx.model.Blogs.findOne({
        where: {
          id,
        },
      }),
      this.service.likes.getBlogLikes(id),
    ]
    const [ blog, likes ] = await Promise.all(task)

    if (blog) {
      blog.increment('visi_count')
      return {
        ...blog.toJSON(),
        likes,
      }
    }
    return null

  }

  public async findAllBlogs(option: SearchBlogsParmas) {
    const likeOption = { [Op.like]: `%${option.keyword || ''}%` }
    return await this.ctx.model.Blogs.findAll({
      where: {
        [Op.or]: {
          title: likeOption,
          content: likeOption,
          username: likeOption,
        },
      },
      include: [
        {
          model: this.ctx.model.Likes,
          as: 'likes',
          attributes: [ 'id' ],
        },
      ],
    })
  }

  public async createBlog(data: BlogAttributes) {
    return await this.ctx.model.Blogs.create(data)
  }

  public async updateAllAttributes(id: number, newAttrbutes: Partial<BlogAttributes>) {
    return await this.ctx.model.Blogs.update(
      newAttrbutes,
      {
        where: { id },
      })
  }


  public async destroy(id:number) {
    return await this.ctx.model.Blogs.destroy({
      where: {
        id,
      },
    })
  }
}


/**
 * @Author: tangzhicheng
 * @Date: 2021-04-06 16:49:19
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-04-14 15:58:31
 * @Description: file content
 */

import { BlogAttributes } from '../model/blogs'
import Controller from './base'

export default class BlogsController extends Controller {
  public async index() {
    const { query } = this.ctx
    const result = await this.service.blogs.findAllBlogs(query)
    this.success(result)
  }

  public async show() {
    const id = Number(this.ctx.params.id)
    if (!id) {
      return this.fail('请传入id！')
    }
    const result = await this.service.blogs.findOneBlog(id)
    this.success(result)
  }

  public async create() {
    const { body } = this.ctx.request
    const rules = {
      title: 'title',
    }
    this.ctx.validate(rules, body)
    const result = await this.service.blogs.createBlog({
      ...body,
      user_id: this.ctx.state.userInfo.id,
      username: this.ctx.state.userInfo.username,
    })
    this.success({ id: result.id })
  }

  public async update() {
    const id = Number(this.ctx.params.id)
    const body = this.ctx.request.body as Partial<BlogAttributes>
    if (!id) {
      return this.fail('请传入id！')
    }

    const data = { ...body }
    delete data.visi_count
    delete data.create_time
    delete data.update_time

    const [ code ] = await this.service.blogs.updateAllAttributes(id, data)
    this.success(code)
  }

  public async like() {
    const id = this.ctx.request.body.id
    const isLike = this.ctx.request.body.isLike
    if (isLike) {
      await this.service.likes.cancelLike(id)
    } else {
      await this.service.likes.giveTheThumbsUp(id)
    }
    this.success(true)
  }

  public async getLikeBlogPersonList() {
    const blog_id = this.ctx.query.id
    if (blog_id) {
      const result = await this.ctx.service.likes.getLikePersonList(Number(blog_id))
      return this.success(result)
    }
    this.fail('请传入id')
  }

  public async destroy() {
    //
  }


}

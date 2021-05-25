/**
 * @Author: tangzhicheng
 * @Date: 2021-03-03 09:08:37
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-04-14 15:58:17
 * @Description: file content
 */
import { Application } from 'egg'


export default (app: Application) => {
  const { controller, router } = app

  // users
  router.get('/api/users/userInfo', controller.users.userInfo)
  router.get('/api/users/userInfo/:id', controller.users.userInfo)
  router.get('/api/users/getSimilar', controller.users.findSimilarPeole)

  router.post('/api/users/login', controller.users.login)
  router.post('/api/users/loginOut', controller.users.loginOut)
  router.post('/api/users/register', controller.users.register)

  // address
  router.get('/api/address/list', controller.address.addressList)
  router.get('/', controller.home.index)

  // blogs
  router.get('/api/blogs', controller.blogs.index)
  router.get('/api/blogs/like', controller.blogs.getLikeBlogPersonList)
  router.get('/api/blogs/:id', controller.blogs.show)
  router.put('/api/blogs', controller.blogs.update)
  router.post('/api/blogs', controller.blogs.create)
  router.post('/api/blogs/like', controller.blogs.like)
}

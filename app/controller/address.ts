/**
 * @Author: tangzhicheng
 * @Date: 2021-03-03 09:16:35
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-04-06 16:36:50
 * @Description: file content
 */

import Controller from './base'


export default class AddressController extends Controller {
  public async addressList() {
    const query = this.ctx.query
    const resutl = await this.service.address.getAddressList(query)
    this.success(resutl)
  }
}


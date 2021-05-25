/**
 * @Author: tangzhicheng
 * @Date: 2021-03-30 23:25:42
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-04-08 15:07:47
 * @Description: file content
 */


import { Service } from 'egg'
import { ModelCtor } from 'sequelize/types'
import { CityItem } from '../model/citys'
import { ProvinceItem } from '../model/provinces'
import { AreaItem } from '../model/areas'

export type AddressInstance = ProvinceItem | CityItem | AreaItem


const processModelName = (s: string) => s[0].toLocaleUpperCase() + s.slice(1)

class AddressService extends Service {
  /**
   * 获取对应地址数据
   * @param query 查询参数
   */
  public async getAddressList(query): Promise<AddressInstance[]> {
    const { type = 'provinces', code = '', parent_code = '' } = query
    const types = [ 'provinces', 'citys', 'areas' ]
    if (!types.includes(type)) throw new Error('请传递正确的参数！')
    const where:any = {}

    if (code) {
      where.code = code
    }

    if (parent_code) {
      where.parent_code = parent_code
    }

    const result = await (this.ctx.model[processModelName(type)] as ModelCtor<any>).findAll({
      where,
    })


    return result
  }


  /**
   * 查询某个地址实例信息
   * @param type 省市区类型
   * @param code 地区code
   */
  public async findAddressInstance(type: string, code: string): Promise<AddressInstance> {
    console.log(processModelName(type))
    const result = await (this.ctx.model[processModelName(type)] as ModelCtor<any>).findOne({
      where: {
        code,
      },
    })

    if (result !== null) return result
    throw new Error('address error')
  }

  /**
   * 创建用户地址信息
   */
  public async createUserAddressInfo(codes: string[], user_id: number) {
    if (codes && codes.length === 3) {
      const [ province, city, area ] = await Promise.all([
        this.findAddressInstance('provinces', codes[0]),
        this.findAddressInstance('citys', codes[1]),
        this.findAddressInstance('areas', codes[2]),
      ])
      return await this.ctx.model.Address.create({
        user_id,
        province: province.name,
        province_code: province.code,
        city: city.name,
        city_code: city.code,
        area: area.name,
        area_code: area.code,
      })
    }
    return null
  }

  /**
   * 查询用户地址信息
   * @param id id
   */
  public async findUserAddress(id: number) {
    return this.ctx.model.Address.findOne({ where: {
      user_id: id,
    } })
  }
}


export default AddressService

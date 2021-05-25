/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @Author: tangzhicheng
 * @Date: 2021-03-30 18:58:15
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-30 19:25:17
 * @Description: file content
 */

const areaData = require('../addressData/index')

const flatCity = address => {
  if (!address.children || address.children.length === 0) return []
  return address.children.map(it => ({
    name: it.label,
    code: it.value,
    parent_code: address.value,
  }))
}


module.exports = {
  up: async queryInterface => {
    const data = areaData.reduce((total, target) => {
      return [ ...total, ...flatCity(target) ]
    }, [])
    await queryInterface.bulkInsert('citys', data, {})
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete('citys', null, {})
  },
}


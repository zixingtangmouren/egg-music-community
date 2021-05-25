/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @Author: tangzhicheng
 * @Date: 2021-03-30 18:58:15
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-30 19:47:36
 * @Description: file content
 */

const areaData = require('../addressData/index')


const flatArea = address => {
  if (!address.children || address.children.length === 0) return []
  return address.children.map(it => ({
    name: it.label,
    code: it.value,
    parent_code: address.value,
  }))
}

const flatCity = address => {
  if (!address.children || address.children.length === 0) return []
  return address.children.reduce((total, target) => {
    return [ ...total, ...flatArea(target) ]
  }, [])
}

module.exports = {
  up: async queryInterface => {
    const data = areaData.reduce((total, target) => {
      return [ ...total, ...flatCity(target) ]
    }, [])
    await queryInterface.bulkInsert('areas', data, {})
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete('areas', null, {})
  },
}


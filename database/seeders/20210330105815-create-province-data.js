/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @Author: tangzhicheng
 * @Date: 2021-03-30 18:58:15
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-30 19:07:23
 * @Description: file content
 */

const areaData = require('../addressData/index')

module.exports = {
  up: async queryInterface => {
    const data = areaData.map(it => ({
      name: it.label,
      code: it.value,
      create_time: new Date(),
      update_time: new Date(),
    }))
    await queryInterface.bulkInsert('provinces', data, {})
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete('provinces', null, {})
  },
}

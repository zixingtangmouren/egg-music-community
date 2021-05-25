/**
 * @Author: tangzhicheng
 * @Date: 2021-03-30 23:18:35
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-04-03 11:44:41
 * @Description: file content
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */

// const { QueryInterface } = require('sequelize/types')


module.exports = {
  /**
   *
   * @param {QueryInterface} queryInterface sd
   */
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      username: 'admin123',
      password: 'admin123',
      sex: 0,
      borthday: new Date(),
      create_time: new Date(),
      update_time: new Date(),
    }], {})
  },

  /**
   *
   * @param {QueryInterface} queryInterface sd
   */
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  },
}

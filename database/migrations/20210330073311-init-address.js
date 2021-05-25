/**
 * @Author: tangzhicheng
 * @Date: 2021-03-30 15:33:11
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-31 23:17:41
 * @Description: file content
 */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize
    await queryInterface.createTable('address', {
      id: {
        type: INTEGER, primaryKey: true, autoIncrement: true,
      },
      province: STRING,
      province_code: STRING,
      city: STRING,
      city_code: STRING,
      area: STRING,
      area_code: STRING,
      user_id: INTEGER,
      create_time: {
        type: DATE,
        allowNull: false,
      },
      update_time: {
        type: DATE,
        allowNull: false,
      },
    })
  },

  down: async queryInterface => {
    await queryInterface.dropTable('address')
  },
}

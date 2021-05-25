/**
 * @Author: tangzhicheng
 * @Date: 2021-03-30 19:09:08
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-30 19:30:11
 * @Description: file content
 */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize
    await queryInterface.createTable('areas', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: {
        type: STRING,
        allowNull: false,
      },
      code: {
        type: STRING,
        allowNull: false,
      },
      parent_code: {
        type: STRING,
        allowNull: false,
      },
      create_time: {
        type: DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      update_time: {
        type: DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
    })
  },

  down: async queryInterface => {
    await queryInterface.dropTable('areas')
  },
}

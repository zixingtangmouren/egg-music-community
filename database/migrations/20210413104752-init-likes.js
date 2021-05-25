/**
 * @Author: tangzhicheng
 * @Date: 2021-04-13 18:47:52
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-04-13 18:56:09
 * @Description: file content
 */


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE } = Sequelize
    await queryInterface.createTable('likes', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      blog_id: {
        type: INTEGER,
        allowNull: false,
      },
      user_id: {
        type: INTEGER,
        allowNull: false,
      },
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

    await queryInterface.dropTable('likes')

  },
}

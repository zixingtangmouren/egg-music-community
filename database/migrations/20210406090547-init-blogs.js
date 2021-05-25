/**
 * @Author: tangzhicheng
 * @Date: 2021-04-06 17:05:47
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-04-13 18:57:01
 * @Description: file content
 */


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, TEXT, DATE } = Sequelize
    await queryInterface.createTable('blogs', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      user_id: { type: INTEGER, allowNull: false },
      username: {
        type: STRING(30),
        allowNull: false,
      },
      title: {
        type: STRING,
        allowNull: false,
      },
      content: TEXT,
      visi_count: {
        type: INTEGER,
        allowNull: false,
        default: 0,
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
    await queryInterface.dropTable('blogs')
  },
}

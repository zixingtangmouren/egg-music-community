/**
 * @Author: tangzhicheng
 * @Date: 2021-04-02 12:36:22
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-04-07 14:05:47
 * @Description: file content
 */


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING } = Sequelize
    await queryInterface.createTable('music_labels', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      user_id: INTEGER,
      blog_id: INTEGER,
      singer: STRING,
      music_name: STRING,
      music_type: STRING,
    })
  },

  down: async queryInterface => {
    await queryInterface.dropTable('music_labels')
  },
}

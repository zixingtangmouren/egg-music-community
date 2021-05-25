

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize
    await queryInterface.createTable('provinces', {
      id: {
        type: INTEGER, primaryKey: true, autoIncrement: true,
      },
      name: {
        type: STRING,
        allowNull: false,
      },
      code: {
        type: STRING,
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
    await queryInterface.dropTable('provinces')
  },
}

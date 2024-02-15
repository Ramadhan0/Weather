// In the seed file (e.g., seeders/20220206123456-demo-users.js)

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'john_doe',
        email: 'john@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'jane_doe',
        email: 'jane@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'bob_smith',
        email: 'bob@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};

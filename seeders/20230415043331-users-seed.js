'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'john',
        email: 'john@example.com',
        img: 'http://flat-icon-design.com/f/f_object_174/s512_f_object_174_0bg.png',
        password: 'foobar1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'michael-scott',
        email: 'michael@example.com',
        img: 'http://flat-icon-design.com/f/f_object_161/s512_f_object_161_0bg.png',
        password: 'foobar2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'catherine',
        email: 'catherine@example.com',
        img: 'http://flat-icon-design.com/f/f_object_108/s512_f_object_108_0bg.png',
        password: 'foobar3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};

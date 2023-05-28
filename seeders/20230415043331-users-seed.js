"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "john",
          email: "john@example.com",
          img: "http://flat-icon-design.com/f/f_object_174/s512_f_object_174_0bg.png",
          password: "foobar123",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "michael-scott",
          email: "michael@example.com",
          img: "http://flat-icon-design.com/f/f_object_161/s512_f_object_161_0bg.png",
          password: "foobar123",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "catherine",
          email: "catherine@example.com",
          img: "http://flat-icon-design.com/f/f_object_108/s512_f_object_108_0bg.png",
          password: "foobar123",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};

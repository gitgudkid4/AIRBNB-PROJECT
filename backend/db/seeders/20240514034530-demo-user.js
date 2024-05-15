'use strict';

const { User } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        username: 'TheImp',
        email: 'terrylan@gmail.com',
        firstName: "Tyrion",
        lastName: "Lannister",
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        username: 'TywinLannister',
        email: 'tywin312@gmail.com',
        firstName: "Tywin",
        lastName: "Lannister",
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        username: 'jimmywhisper',
        email: 'cerseilover123',
        firstName: "Jaime",
        lastName: "Lannister",
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        username: 'queencersei501',
        email: 'cersei1042@gmail.com',
        firstName: "Cersei",
        lastName: "Lannister",
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        username: 'kingofall',
        email: 'thebraveking@gmail.com',
        firstName: "Joffrey",
        lastName: "Baratheon",
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        username: 'catlover123',
        email: 'tbaratheon@gmail.com',
        firstName: "Tommen",
        lastName: "Baratheon",
        hashedPassword: bcrypt.hashSync('password')
      }
    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ["Demo-lition", "Homey", "Margey", "Barty", "Lisy", "Maggy"] }
    }, {});
  }
};

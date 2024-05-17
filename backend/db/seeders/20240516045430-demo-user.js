'use strict';

const bcrypt = require("bcryptjs");
const { User } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Users";
    // return queryInterface.bulkInsert(options, [
    await User.bulkCreate([
      {
        username: 'Pikachu123',
        email: 'pikachu@pokemon.com',
        firstName: "Pika",
        lastName: "Chu",
        hashedPassword: bcrypt.hashSync('pikaPassword')
      },
      {
        username: 'Charmander456',
        email: 'charmander@pokemon.com',
        firstName: "Char",
        lastName: "Mander",
        hashedPassword: bcrypt.hashSync('charPassword')
      },
      {
        username: 'Bulbasaur789',
        firstName: "Bulba",
        lastName: "Saur",
        email: 'bulbasaur@pokemon.com',
        hashedPassword: bcrypt.hashSync('bulbaPassword')
      },
      {
        username: 'Squirtle101',
        firstName: "Squirt",
        lastName: "Tle",
        email: 'squirtle@pokemon.com',
        hashedPassword: bcrypt.hashSync('squirtPassword')
      },
      {
        username: 'Jigglypuff202',
        firstName: "Jiggly",
        lastName: "Puff",
        email: 'jigglypuff@pokemon.com',
        hashedPassword: bcrypt.hashSync('jigglyPassword')
      },
      {
        username: 'Meowth303',
        firstName: "Meow",
        lastName: "Th",
        email: 'meowth@pokemon.com',
        hashedPassword: bcrypt.hashSync('meowPassword')
      }
      // ], {});
    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ["Pikachu123", "Charmander456", "Bulbasaur789", "Squirtle101", "Jigglypuff202", "Meowth303"] }
    }, {});
  }
};

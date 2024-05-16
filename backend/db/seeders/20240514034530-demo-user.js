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
    await User.bulkCreate([
      {
        username: 'WinterfellWarden',
        email: 'ned.stark@gmail.com',
        firstName: "Eddard",
        lastName: "Stark",
        hashedPassword: bcrypt.hashSync('winteriscoming')
      },
      {
        username: 'LadyCatelyn',
        email: 'catelyn.tully@gmail.com',
        firstName: "Catelyn",
        lastName: "Stark",
        hashedPassword: bcrypt.hashSync('motherofnorth')
      },
      {
        username: 'KingInTheNorth',
        email: 'robb.stark@gmail.com',
        firstName: "Robb",
        lastName: "Stark",
        hashedPassword: bcrypt.hashSync('kinginthenorth')
      },
      {
        username: 'LadySansa',
        email: 'sansa.stark@gmail.com',
        firstName: "Sansa",
        lastName: "Stark",
        hashedPassword: bcrypt.hashSync('ladyofwinterfell')
      },
      {
        username: 'NoOne',
        email: 'arya.stark@gmail.com',
        firstName: "Arya",
        lastName: "Stark",
        hashedPassword: bcrypt.hashSync('nofacedeath')
      },
      {
        username: 'ThreeEyedRaven',
        email: 'bran.stark@gmail.com',
        firstName: "Bran",
        lastName: "Stark",
        hashedPassword: bcrypt.hashSync('threeyeedraven')
      },
      {
        username: 'YoungWolf',
        email: 'rickon.stark@gmail.com',
        firstName: "Rickon",
        lastName: "Stark",
        hashedPassword: bcrypt.hashSync('youngwolf')
      }
    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ["WinterfellWarden", "LadyCatelyn", "KingInTheNorth", "LadySansa", "NoOne", "ThreeEyedRaven", "YoungWolf"] }
    }, {});
  }
};

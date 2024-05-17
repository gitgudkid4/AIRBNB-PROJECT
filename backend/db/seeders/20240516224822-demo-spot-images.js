'use strict';

const { SpotImage } = require("../models");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "SpotImages";
    await SpotImage.bulkCreate([
      {
        spotId: 1,
        url: "https://images.app.goo.gl/xyz1",
        preview: true
      },
      {
        spotId: 1,
        url: "https://images.app.goo.gl/xyz1",
        preview: false
      },
      {
        spotId: 1,
        url: "https://images.app.goo.gl/xyz1",
        preview: false
      },
      {
        spotId: 2,
        url: "https://images.app.goo.gl/xyz2",
        preview: false
      },
      {
        spotId: 2,
        url: "https://images.app.goo.gl/xyz2",
        preview: true
      },
      {
        spotId: 2,
        url: "https://images.app.goo.gl/xyz2",
        preview: false
      },
      {
        spotId: 3,
        url: "https://images.app.goo.gl/xyz3",
        preview: false
      },
      {
        spotId: 3,
        url: "https://images.app.goo.gl/xyz3",
        preview: false
      },
      {
        spotId: 3,
        url: "https://images.app.goo.gl/xyz3",
        preview: true
      },
      {
        spotId: 4,
        url: "https://images.app.goo.gl/xyz4",
        preview: true
      },
      {
        spotId: 4,
        url: "https://images.app.goo.gl/xyz4",
        preview: false
      },
      {
        spotId: 4,
        url: "https://images.app.goo.gl/xyz4",
        preview: false
      },
      {
        spotId: 5,
        url: "https://images.app.goo.gl/xyz5",
        preview: false
      },
      {
        spotId: 5,
        url: "https://images.app.goo.gl/xyz5",
        preview: true
      },
      {
        spotId: 5,
        url: "https://images.app.goo.gl/xyz5",
        preview: false
      },
      {
        spotId: 6,
        url: "https://images.app.goo.gl/xyz6",
        preview: false
      },
      {
        spotId: 6,
        url: "https://images.app.goo.gl/xyz6",
        preview: false
      },
      {
        spotId: 6,
        url: "https://images.app.goo.gl/xyz6",
        preview: true
      },
      {
        spotId: 7,
        url: "https://images.app.goo.gl/xyz7",
        preview: true
      },
      {
        spotId: 7,
        url: "https://images.app.goo.gl/xyz7",
        preview: false
      },
      {
        spotId: 7,
        url: "https://images.app.goo.gl/xyz7",
        preview: false
      },
      {
        spotId: 8,
        url: "https://images.app.goo.gl/xyz8",
        preview: false
      },
      {
        spotId: 8,
        url: "https://images.app.goo.gl/xyz8",
        preview: true
      },
      {
        spotId: 8,
        url: "https://images.app.goo.gl/xyz8",
        preview: false
      },
      {
        spotId: 9,
        url: "https://images.app.goo.gl/xyz9",
        preview: false
      },
      {
        spotId: 9,
        url: "https://images.app.goo.gl/xyz9",
        preview: false
      },
      {
        spotId: 9,
        url: "https://images.app.goo.gl/xyz9",
        preview: true
      },
      {
        spotId: 10,
        url: "https://images.app.goo.gl/xyz10",
        preview: true
      },
      {
        spotId: 10,
        url: "https://images.app.goo.gl/xyz10",
        preview: false
      },
      {
        spotId: 10,
        url: "https://images.app.goo.gl/xyz10",
        preview: false
      },
      {
        spotId: 11,
        url: "https://images.app.goo.gl/xyz11",
        preview: false
      },
      {
        spotId: 11,
        url: "https://images.app.goo.gl/xyz11",
        preview: true
      },
      {
        spotId: 11,
        url: "https://images.app.goo.gl/xyz11",
        preview: false
      },
      {
        spotId: 12,
        url: "https://images.app.goo.gl/xyz12",
        preview: false
      },
      {
        spotId: 12,
        url: "https://images.app.goo.gl/xyz12",
        preview: true
      },
      {
        spotId: 12,
        url: "https://images.app.goo.gl/xyz12",
        preview: false
      },
      {
        spotId: 13,
        url: "https://images.app.goo.gl/xyz13",
        preview: true
      },
      {
        spotId: 13,
        url: "https://images.app.goo.gl/xyz13",
        preview: false
      },
      {
        spotId: 13,
        url: "https://images.app.goo.gl/xyz13",
        preview: false
      },
      {
        spotId: 14,
        url: "https://images.app.goo.gl/xyz14",
        preview: false
      },
      {
        spotId: 14,
        url: "https://images.app.goo.gl/xyz14",
        preview: true
      },
      {
        spotId: 14,
        url: "https://images.app.goo.gl/xyz14",
        preview: false
      },
      {
        spotId: 15,
        url: "https://images.app.goo.gl/xyz15",
        preview: false
      },
      {
        spotId: 15,
        url: "https://images.app.goo.gl/xyz15",
        preview: true
      },
      {
        spotId: 15,
        url: "https://images.app.goo.gl/xyz15",
        preview: false
      },
      {
        spotId: 16,
        url: "https://images.app.goo.gl/xyz16",
        preview: true
      },
      {
        spotId: 16,
        url: "https://images.app.goo.gl/xyz16",
        preview: false
      },
      {
        spotId: 16,
        url: "https://images.app.goo.gl/xyz16",
        preview: false
      },
      {
        spotId: 17,
        url: "https://images.app.goo.gl/xyz17",
        preview: false
      },
      {
        spotId: 17,
        url: "https://images.app.goo.gl/xyz17",
        preview: true
      },
      {
        spotId: 17,
        url: "https://images.app.goo.gl/xyz17",
        preview: false
      },
      {
        spotId: 18,
        url: "https://images.app.goo.gl/xyz18",
        preview: false
      },
      {
        spotId: 18,
        url: "https://images.app.goo.gl/xyz18",
        preview: true
      },
      {
        spotId: 18,
        url: "https://images.app.goo.gl/xyz18",
        preview: false
      },
      {
        spotId: 19,
        url: "https://images.app.goo.gl/xyz19",
        preview: true
      },
      {
        spotId: 19,
        url: "https://images.app.goo.gl/xyz19",
        preview: false
      },
      {
        spotId: 19,
        url: "https://images.app.goo.gl/xyz19",
        preview: false
      },
      {
        spotId: 20,
        url: "https://images.app.goo.gl/xyz20",
        preview: true
      },
      {
        spotId: 20,
        url: "https://images.app.goo.gl/xyz20",
        preview: false
      },
      {
        spotId: 20,
        url: "https://images.app.goo.gl/xyz20",
        preview: false
      }
    ], { validate: true });
  },


  async down(queryInterface, Sequelize) {
    options.tableName = "SpotImages";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] }
    }, {});
  }
};

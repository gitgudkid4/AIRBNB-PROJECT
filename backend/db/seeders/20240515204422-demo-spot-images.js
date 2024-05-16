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
      // Spot 1
      {
        spotId: 1,
        url: "https://example.com/image1_1.jpg",
        preview: true
      },
      {
        spotId: 1,
        url: "https://example.com/image1_2.jpg",
        preview: false
      },
      {
        spotId: 1,
        url: "https://example.com/image1_3.jpg",
        preview: false
      },
      {
        spotId: 1,
        url: "https://example.com/image1_4.jpg",
        preview: false
      },
      {
        spotId: 1,
        url: "https://example.com/image1_5.jpg",
        preview: false
      },
      // Spot 2
      {
        spotId: 2,
        url: "https://example.com/image2_1.jpg",
        preview: true
      },
      {
        spotId: 2,
        url: "https://example.com/image2_2.jpg",
        preview: false
      },
      {
        spotId: 2,
        url: "https://example.com/image2_3.jpg",
        preview: false
      },
      {
        spotId: 2,
        url: "https://example.com/image2_4.jpg",
        preview: false
      },
      {
        spotId: 2,
        url: "https://example.com/image2_5.jpg",
        preview: false
      },
      // Spot 3
      {
        spotId: 3,
        url: "https://example.com/image3_1.jpg",
        preview: true
      },
      {
        spotId: 3,
        url: "https://example.com/image3_2.jpg",
        preview: false
      },
      {
        spotId: 3,
        url: "https://example.com/image3_3.jpg",
        preview: false
      },
      {
        spotId: 3,
        url: "https://example.com/image3_4.jpg",
        preview: false
      },
      {
        spotId: 3,
        url: "https://example.com/image3_5.jpg",
        preview: false
      },
      // Spot 4
      {
        spotId: 4,
        url: "https://example.com/image4_1.jpg",
        preview: true
      },
      {
        spotId: 4,
        url: "https://example.com/image4_2.jpg",
        preview: false
      },
      {
        spotId: 4,
        url: "https://example.com/image4_3.jpg",
        preview: false
      },
      {
        spotId: 4,
        url: "https://example.com/image4_4.jpg",
        preview: false
      },
      {
        spotId: 4,
        url: "https://example.com/image4_5.jpg",
        preview: false
      },
      // Spot 5
      {
        spotId: 5,
        url: "https://example.com/image5_1.jpg",
        preview: true
      },
      {
        spotId: 5,
        url: "https://example.com/image5_2.jpg",
        preview: false
      },
      {
        spotId: 5,
        url: "https://example.com/image5_3.jpg",
        preview: false
      },
      {
        spotId: 5,
        url: "https://example.com/image5_4.jpg",
        preview: false
      },
      {
        spotId: 5,
        url: "https://example.com/image5_5.jpg",
        preview: false
      },
      // Spot 6
      {
        spotId: 6,
        url: "https://example.com/image6_1.jpg",
        preview: true
      },
      {
        spotId: 6,
        url: "https://example.com/image6_2.jpg",
        preview: false
      },
      {
        spotId: 6,
        url: "https://example.com/image6_3.jpg",
        preview: false
      },
      {
        spotId: 6,
        url: "https://example.com/image6_4.jpg",
        preview: false
      },
      {
        spotId: 6,
        url: "https://example.com/image6_5.jpg",
        preview: false
      },
      // Spot 7
      {
        spotId: 7,
        url: "https://example.com/image7_1.jpg",
        preview: true
      },
      {
        spotId: 7,
        url: "https://example.com/image7_2.jpg",
        preview: false
      },
      {
        spotId: 7,
        url: "https://example.com/image7_3.jpg",
        preview: false
      },
      {
        spotId: 7,
        url: "https://example.com/image7_4.jpg",
        preview: false
      },
      {
        spotId: 7,
        url: "https://example.com/image7_5.jpg",
        preview: false
      },
      // Spot 8
      {
        spotId: 8,
        url: "https://example.com/image8_1.jpg",
        preview: true
      },
      {
        spotId: 8,
        url: "https://example.com/image8_2.jpg",
        preview: false
      },
      {
        spotId: 8,
        url: "https://example.com/image8_3.jpg",
        preview: false
      },
      {
        spotId: 8,
        url: "https://example.com/image8_4.jpg",
        preview: false
      },
      {
        spotId: 8,
        url: "https://example.com/image8_5.jpg",
        preview: false
      },
      // Spot 9
      {
        spotId: 9,
        url: "https://example.com/image9_1.jpg",
        preview: true
      },
      {
        spotId: 9,
        url: "https://example.com/image9_2.jpg",
        preview: false
      },
      {
        spotId: 9,
        url: "https://example.com/image9_3.jpg",
        preview: false
      },
      {
        spotId: 9,
        url: "https://example.com/image9_4.jpg",
        preview: false
      },
      {
        spotId: 9,
        url: "https://example.com/image9_5.jpg",
        preview: false
      },
      // Spot 10
      {
        spotId: 10,
        url: "https://example.com/image10_1.jpg",
        preview: true
      },
      {
        spotId: 10,
        url: "https://example.com/image10_2.jpg",
        preview: false
      },
      {
        spotId: 10,
        url: "https://example.com/image10_3.jpg",
        preview: false
      },
      {
        spotId: 10,
        url: "https://example.com/image10_4.jpg",
        preview: false
      },
      {
        spotId: 10,
        url: "https://example.com/image10_5.jpg",
        preview: false
      }
    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "SpotImages";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
    }, {});
  }
};

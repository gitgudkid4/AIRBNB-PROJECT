'use strict';

const { Review } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Reviews";
    await Review.bulkCreate([
      {
        spotId: 1,
        userId: 1,
        review: "A fantastic place to stay! The host was very friendly and the amenities were top-notch.",
        stars: 5
      },
      {
        spotId: 2,
        userId: 1,
        review: "The location was great, but the place could have been cleaner. Overall, a good experience.",
        stars: 4
      },
      {
        spotId: 3,
        userId: 1,
        review: "The spot was okay, but the price was too high for what it offered. Would not stay again.",
        stars: 2
      },
      {
        spotId: 4,
        userId: 1,
        review: "Amazing spot! The view was breathtaking and the interior was stylish and comfortable.",
        stars: 5
      },
      {
        spotId: 5,
        userId: 2,
        review: "The host was accommodating, but the spot itself was not well-maintained. Disappointing.",
        stars: 2
      },
      {
        spotId: 6,
        userId: 2,
        review: "Great value for the price. The spot was clean and had all the necessary amenities.",
        stars: 4
      },
      {
        spotId: 7,
        userId: 2,
        review: "A decent spot, but the neighborhood was a bit noisy. Had a good stay overall.",
        stars: 3
      },
      {
        spotId: 8,
        userId: 2,
        review: "Perfect for a weekend getaway. The host was friendly and the place was cozy.",
        stars: 5
      },
      {
        spotId: 9,
        userId: 3,
        review: "The spot was nice but lacked some basic amenities. Could use some improvements.",
        stars: 3
      },
      {
        spotId: 10,
        userId: 3,
        review: "Had a wonderful time here. The location was convenient and the place was very comfortable.",
        stars: 5
      },
      {
        spotId: 11,
        userId: 3,
        review: "The spot was clean and the host was helpful. However, the WiFi was unreliable.",
        stars: 3
      },
      {
        spotId: 12,
        userId: 3,
        review: "Enjoyed our stay. The spot was well-equipped and the host was very responsive.",
        stars: 4
      },
      {
        spotId: 13,
        userId: 4,
        review: "Not as expected. The cleanliness was lacking and the amenities were outdated.",
        stars: 2
      },
      {
        spotId: 14,
        userId: 4,
        review: "A beautiful place with a great host. We had a fantastic time and would recommend it.",
        stars: 5
      },
      {
        spotId: 15,
        userId: 4,
        review: "The spot was okay, but the price seemed a bit high for what it offered. Overall, an average experience.",
        stars: 3
      },
      {
        spotId: 16,
        userId: 4,
        review: "Loved the location and the spot was very comfortable. Will definitely come back.",
        stars: 5
      },
      {
        spotId: 17,
        userId: 5,
        review: "The host was very accommodating and the spot was in a great location. Had a pleasant stay.",
        stars: 4
      },
      {
        spotId: 18,
        userId: 5,
        review: "Not a good experience. The spot was dirty and many amenities were broken. Would not recommend.",
        stars: 1
      },
      {
        spotId: 19,
        userId: 5,
        review: "The spot was nice but the host was not very responsive. Had some issues during our stay.",
        stars: 3
      },
      {
        spotId: 20,
        userId: 5,
        review: "Absolutely loved this place! Everything was perfect and the host was very welcoming.",
        stars: 5
      },
      {
        spotId: 1,
        userId: 6,
        review: "The spot was just okay. It was clean but lacked some basic amenities. An average experience.",
        stars: 3
      },
      {
        spotId: 2,
        userId: 6,
        review: "Had a great time here. The place was cozy and the host was very helpful.",
        stars: 4
      },
      {
        spotId: 3,
        userId: 6,
        review: "The location was convenient but the place could have been better maintained. A decent stay.",
        stars: 3
      },
      {
        spotId: 4,
        userId: 6,
        review: "A lovely place with a wonderful host. We enjoyed our stay and would definitely come back.",
        stars: 5
      },
      {
        spotId: 5,
        userId: 1,
        review: "The spot was okay but not as described. Some amenities were missing and the cleanliness was subpar.",
        stars: 2
      },
      {
        spotId: 6,
        userId: 1,
        review: "Great spot for a short stay. The place was clean and the host was friendly.",
        stars: 4
      },
      {
        spotId: 7,
        userId: 1,
        review: "An average experience. The spot was decent but nothing special. Would look for other options next time.",
        stars: 3
      },
      {
        spotId: 8,
        userId: 1,
        review: "We had a great time here. The location was perfect and the spot was very comfortable.",
        stars: 5
      },
      {
        spotId: 9,
        userId: 2,
        review: "The spot was decent but could use some improvements. The WiFi was particularly bad.",
        stars: 3
      },
      {
        spotId: 10,
        userId: 2,
        review: "Loved our stay here. The place was well-maintained and the host was very accommodating.",
        stars: 5
      },
      {
        spotId: 11,
        userId: 2,
        review: "A good place to stay for a few days. The host was helpful and the spot had everything we needed.",
        stars: 4
      },
      {
        spotId: 12,
        userId: 2,
        review: "The spot was okay but the neighborhood was a bit noisy. Had an average experience.",
        stars: 3
      },
      {
        spotId: 13,
        userId: 3,
        review: "Not a great experience. The spot was dirty and the host was unresponsive. Would not recommend.",
        stars: 1
      },
      {
        spotId: 14,
        userId: 3,
        review: "A lovely spot with a great host. Everything was perfect and we had a fantastic time.",
        stars: 5
      },
      {
        spotId: 15,
        userId: 3,
        review: "The spot was okay but nothing special. Found it a bit overpriced for what it offered.",
        stars: 3
      },
      {
        spotId: 16,
        userId: 3,
        review: "Had an amazing time here. The spot was beautiful and the host was very welcoming.",
        stars: 5
      }
    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Reviews";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      userId: { [Op.in]: [1, 2, 3, 4, 5, 6] }
    }, {});
  }
};

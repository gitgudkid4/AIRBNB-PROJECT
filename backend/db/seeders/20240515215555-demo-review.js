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
        review: "A cozy spot with a fantastic view. The host was very helpful and responsive. Highly recommend!",
        stars: 5
      },
      {
        spotId: 2,
        userId: 1,
        review: "The place was well-maintained and clean, but the location was a bit noisy at night.",
        stars: 4
      },
      {
        spotId: 3,
        userId: 1,
        review: "An average experience. The amenities were basic and the host was not very communicative.",
        stars: 3
      },
      {
        spotId: 4,
        userId: 1,
        review: "Fantastic stay! The spot exceeded our expectations with its modern decor and convenient location.",
        stars: 5
      },
      {
        spotId: 5,
        userId: 1,
        review: "The spot was okay, but not very clean. Some amenities were missing as well.",
        stars: 2
      },
      {
        spotId: 6,
        userId: 2,
        review: "Had a great time here! The host was very friendly and the spot was perfect for our needs.",
        stars: 5
      },
      {
        spotId: 7,
        userId: 2,
        review: "Nice place, but a bit overpriced for what it offers. The location is great though.",
        stars: 3
      },
      {
        spotId: 8,
        userId: 2,
        review: "A beautiful spot with all the amenities we needed. Will definitely come back.",
        stars: 4
      },
      {
        spotId: 9,
        userId: 2,
        review: "Disappointing stay. The cleanliness was not up to par and the host was unresponsive.",
        stars: 1
      },
      {
        spotId: 10,
        userId: 2,
        review: "Good value for the price. The spot was clean and comfortable, with a nice view.",
        stars: 4
      },
      {
        spotId: 11,
        userId: 3,
        review: "An excellent spot with a great host. Everything was as described and we had a wonderful time.",
        stars: 5
      },
      {
        spotId: 12,
        userId: 3,
        review: "The place was decent, but the internet connection was quite poor.",
        stars: 3
      },
      {
        spotId: 13,
        userId: 3,
        review: "Lovely spot with a charming garden. The host was very accommodating.",
        stars: 5
      },
      {
        spotId: 14,
        userId: 3,
        review: "The spot was clean and the location was convenient, but it lacked some basic kitchen amenities.",
        stars: 3
      },
      {
        spotId: 15,
        userId: 3,
        review: "A great spot for a weekend getaway. The host provided excellent recommendations for local activities.",
        stars: 4
      },
      {
        spotId: 16,
        userId: 4,
        review: "The place was okay, but the neighborhood was a bit sketchy at night.",
        stars: 2
      },
      {
        spotId: 17,
        userId: 4,
        review: "A beautiful and well-maintained spot. We felt right at home and the host was great.",
        stars: 5
      },
      {
        spotId: 18,
        userId: 4,
        review: "The spot was good overall, but the furniture was a bit outdated.",
        stars: 3
      },
      {
        spotId: 19,
        userId: 4,
        review: "Had a pleasant stay. The host was very welcoming and the place had everything we needed.",
        stars: 4
      },
      {
        spotId: 20,
        userId: 4,
        review: "A fantastic location and a beautiful spot. Would highly recommend to others.",
        stars: 5
      },
      {
        spotId: 1,
        userId: 5,
        review: "The place was decent, but the photos were misleading. It wasn't as spacious as we expected.",
        stars: 3
      },
      {
        spotId: 2,
        userId: 5,
        review: "The spot was clean and the location was great, but it was quite noisy at night.",
        stars: 3
      },
      {
        spotId: 3,
        userId: 5,
        review: "Had a wonderful stay. The host was very accommodating and the place was beautiful.",
        stars: 5
      },
      {
        spotId: 4,
        userId: 5,
        review: "An average experience. The place was okay, but nothing special.",
        stars: 3
      },
      {
        spotId: 5,
        userId: 6,
        review: "Great spot with a beautiful view. The host was very friendly and helpful.",
        stars: 5
      },
      {
        spotId: 6,
        userId: 6,
        review: "The place was clean and comfortable, but the WiFi was unreliable.",
        stars: 3
      },
      {
        spotId: 7,
        userId: 6,
        review: "Had a pleasant stay. The location was convenient and the spot was well-maintained.",
        stars: 4
      },
      {
        spotId: 8,
        userId: 6,
        review: "The spot was good overall, but it was a bit small for our group.",
        stars: 3
      },
      {
        spotId: 9,
        userId: 6,
        review: "An excellent stay! The place was perfect and the host was very welcoming.",
        stars: 5
      },
      {
        spotId: 10,
        userId: 6,
        review: "The place was decent, but not very clean. Some amenities were missing as well.",
        stars: 2
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

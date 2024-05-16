'use strict';

const { Spot } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Spots";
    await Spot.bulkCreate([
      {
        ownerId: 1,
        address: "12 Beacon St",
        city: "Boston",
        state: "MA",
        country: "USA",
        lat: 42.3584,
        lng: -71.0636,
        name: "Historic Home in Boston",
        description: "A beautiful historic home with modern amenities.",
        price: 250.00,
        previewImage: "https://example.com/image1.jpg",
        avgRating: null
      },
      {
        ownerId: 2,
        address: "678 Ocean Blvd",
        city: "Virginia Beach",
        state: "VA",
        country: "USA",
        lat: 36.8529,
        lng: -75.9780,
        name: "Oceanfront Condo in Virginia Beach",
        description: "A stunning condo with direct ocean views.",
        price: 300.00,
        previewImage: "https://example.com/image2.jpg",
        avgRating: null
      },
      {
        ownerId: 3,
        address: "901 Maple Ave",
        city: "Nashville",
        state: "TN",
        country: "USA",
        lat: 36.1627,
        lng: -86.7816,
        name: "Music City Hideaway",
        description: "A cozy hideaway in the heart of Music City.",
        price: 180.00,
        previewImage: "https://example.com/image3.jpg",
        avgRating: null
      },
      {
        ownerId: 4,
        address: "123 Main St",
        city: "Dallas",
        state: "TX",
        country: "USA",
        lat: 32.7767,
        lng: -96.7970,
        name: "Modern Loft in Dallas",
        description: "A sleek loft with stunning city views.",
        price: 275.00,
        previewImage: "https://example.com/image4.jpg",
        avgRating: null
      },
      {
        ownerId: 5,
        address: "456 Sunset Blvd",
        city: "Los Angeles",
        state: "CA",
        country: "USA",
        lat: 34.0522,
        lng: -118.2437,
        name: "Luxurious Villa in Los Angeles",
        description: "A luxurious villa with a private pool and garden.",
        price: 450.00,
        previewImage: "https://example.com/image5.jpg",
        avgRating: null
      },
      {
        ownerId: 6,
        address: "789 Pine St",
        city: "Portland",
        state: "OR",
        country: "USA",
        lat: 45.5152,
        lng: -122.6784,
        name: "Trendy Studio in Portland",
        description: "A trendy studio in a vibrant neighborhood.",
        price: 150.00,
        previewImage: "https://example.com/image6.jpg",
        avgRating: null
      },
      {
        ownerId: 1,
        address: "1012 Birch Rd",
        city: "Madison",
        state: "WI",
        country: "USA",
        lat: 43.0731,
        lng: -89.4012,
        name: "Charming Cottage in Madison",
        description: "A charming cottage with a beautiful garden.",
        price: 200.00,
        previewImage: "https://example.com/image7.jpg",
        avgRating: null
      },
      {
        ownerId: 2,
        address: "345 Cedar St",
        city: "Savannah",
        state: "GA",
        country: "USA",
        lat: 32.0809,
        lng: -81.0912,
        name: "Historic Apartment in Savannah",
        description: "A historic apartment with modern upgrades.",
        price: 220.00,
        previewImage: "https://example.com/image8.jpg",
        avgRating: null
      },
      {
        ownerId: 3,
        address: "567 Elm St",
        city: "Boulder",
        state: "CO",
        country: "USA",
        lat: 40.0150,
        lng: -105.2705,
        name: "Mountain View House in Boulder",
        description: "A house with breathtaking mountain views.",
        price: 260.00,
        previewImage: "https://example.com/image9.jpg",
        avgRating: null
      },
      {
        ownerId: 4,
        address: "789 Ash St",
        city: "San Diego",
        state: "CA",
        country: "USA",
        lat: 32.7157,
        lng: -117.1611,
        name: "Beachside Bungalow in San Diego",
        description: "A cozy bungalow just steps from the beach.",
        price: 350.00,
        previewImage: "https://example.com/image10.jpg",
        avgRating: null
      }
    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Spots";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      ownerId: { [Op.in]: [1, 2, 3, 4, 5, 6] }
    }, {});
  }
};

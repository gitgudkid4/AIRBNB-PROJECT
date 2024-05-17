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
        address: "456 Oak St",
        city: "San Francisco",
        state: "CA",
        country: "USA",
        lat: 37.7749,
        lng: -122.4194,
        name: "Beautiful Apartment in SF",
        description: "A beautiful one-bedroom apartment in the heart of San Francisco.",
        price: 180.00,
        previewImage: "https://images.mansionglobal.com//im-697060",
        avgRating: null
      },
      {
        ownerId: 2,
        address: "123 Maple Ave",
        city: "Seattle",
        state: "WA",
        country: "USA",
        lat: 47.6062,
        lng: -122.3321,
        name: "Charming House in Seattle",
        description: "A charming house in the suburbs of Seattle.",
        price: 200.00,
        previewImage: "https://images.mansionglobal.com//im-697060",
        avgRating: null
      },
      {
        ownerId: 3,
        address: "789 Elm St",
        city: "Orlando",
        state: "FL",
        country: "USA",
        lat: 28.5383,
        lng: -81.3792,
        name: "Cozy Cottage in Orlando",
        description: "A cozy cottage perfect for a weekend getaway.",
        price: 150.00,
        previewImage: "https://images.mansionglobal.com//im-697060",
        avgRating: null
      },
      {
        ownerId: 4,
        address: "303 Birch St",
        city: "New York",
        state: "NY",
        country: "USA",
        lat: 40.7128,
        lng: -74.0060,
        name: "Luxury Loft in NYC",
        description: "A luxurious loft with stunning city views.",
        price: 300.00,
        previewImage: "https://images.mansionglobal.com//im-697060",
        avgRating: null
      },
      {
        ownerId: 5,
        address: "808 Palm St",
        city: "Los Angeles",
        state: "CA",
        country: "USA",
        lat: 34.0522,
        lng: -118.2437,
        name: "Stylish Home in LA",
        description: "A stylish home in the heart of Los Angeles.",
        price: 250.00,
        previewImage: "https://images.mansionglobal.com//im-697060",
        avgRating: null
      },
      {
        ownerId: 6,
        address: "606 Ocean Dr",
        city: "Miami",
        state: "FL",
        country: "USA",
        lat: 25.7617,
        lng: -80.1918,
        name: "Luxury Villa in Miami",
        description: "A luxurious villa with breathtaking ocean views.",
        price: 400.00,
        previewImage: "https://images.mansionglobal.com//im-697060",
        avgRating: null
      },
      {
        ownerId: 1,
        address: "456 Maple Ave",
        city: "San Francisco",
        state: "CA",
        country: "USA",
        lat: 37.7749,
        lng: -122.4194,
        name: "Modern Apartment in SF",
        description: "A modern apartment in the heart of San Francisco.",
        price: 220.00,
        previewImage: "https://images.mansionglobal.com//im-697060",
        avgRating: null
      },
      {
        ownerId: 2,
        address: "101 Elm St",
        city: "Seattle",
        state: "WA",
        country: "USA",
        lat: 47.6062,
        lng: -122.3321,
        name: "Urban Loft in Seattle",
        description: "An urban loft with industrial charm.",
        price: 180.00,
        previewImage: "https://images.mansionglobal.com//im-697060",
        avgRating: null
      },
      {
        ownerId: 3,
        address: "303 Birch St",
        city: "Orlando",
        state: "FL",
        country: "USA",
        lat: 28.5383,
        lng: -81.3792,
        name: "Chic Apartment in Orlando",
        description: "A chic apartment in downtown Orlando.",
        price: 160.00,
        previewImage: "https://images.mansionglobal.com//im-697060",
        avgRating: null
      },
      {
        ownerId: 4,
        address: "606 Ocean Dr",
        city: "New York",
        state: "NY",
        country: "USA",
        lat: 40.7128,
        lng: -74.0060,
        name: "Luxury Penthouse in NYC",
        description: "A luxurious penthouse with panoramic city views.",
        price: 500.00,
        previewImage: "https://images.mansionglobal.com//im-697060",
        avgRating: null
      },
      {
        ownerId: 5,
        address: "808 Palm St",
        city: "Los Angeles",
        state: "CA",
        country: "USA",
        lat: 34.0522,
        lng: -118.2437,
        name: "Modern Condo in LA",
        description: "A modern condo in the heart of Los Angeles.",
        price: 280.00,
        previewImage: "https://images.mansionglobal.com//im-697060",
        avgRating: null
      },
      {
        ownerId: 6,
        address: "909 Cypress Ave",
        city: "Miami",
        state: "FL",
        country: "USA",
        lat: 25.7617,
        lng: -80.1918,
        name: "Beach House in Miami",
        description: "A beach house with direct access to the ocean.",
        price: 600.00,
        previewImage: "https://images.mansionglobal.com//im-697060",
        avgRating: null
      },
      {
        ownerId: 1,
        address: "101 Pine St",
        city: "San Francisco",
        state: "CA",
        country: "USA",
        lat: 37.7749,
        lng: -122.4194,
        name: "Luxury Mansion in SF",
        description: "A luxurious mansion in the heart of San Francisco.",
        price: 1000.00,
        previewImage: "https://images.mansionglobal.com//im-697060",
        avgRating: null
      },
      {
        ownerId: 2,
        address: "404 Spruce St",
        city: "Seattle",
        state: "WA",
        country: "USA",
        lat: 47.6062,
        lng: -122.3321,
        name: "Rustic Cabin in Seattle",
        description: "A cozy rustic cabin nestled in the woods.",
        price: 120.00,
        previewImage: "https://images.mansionglobal.com//im-697060",
        avgRating: null
      },
      {
        ownerId: 3,
        address: "909 Cypress Ave",
        city: "Orlando",
        state: "FL",
        country: "USA",
        lat: 28.5383,
        lng: -81.3792,
        name: "Modern Townhouse in Orlando",
        description: "A modern townhouse with a private courtyard.",
        price: 300.00,
        previewImage: "https://images.mansionglobal.com//im-697060",
        avgRating: null
      },
      {
        ownerId: 4,
        address: "909 Cypress Ave",
        city: "New York",
        state: "NY",
        country: "USA",
        lat: 40.7128,
        lng: -74.0060,
        name: "Chic Studio in NYC",
        description: "A chic studio apartment in the heart of New York City.",
        price: 180.00,
        previewImage: "https://images.mansionglobal.com//im-697060",
        avgRating: null
      },
      {
        ownerId: 5,
        address: "808 Palm St",
        city: "Los Angeles",
        state: "CA",
        country: "USA",
        lat: 34.0522,
        lng: -118.2437,
        name: "Luxury Apartment in LA",
        description: "A luxurious apartment in a high-rise building.",
        price: 350.00,
        previewImage: "https://images.mansionglobal.com//im-697060",
        avgRating: null
      },
      {
        ownerId: 6,
        address: "303 Birch St",
        city: "Miami",
        state: "FL",
        country: "USA",
        lat: 25.7617,
        lng: -80.1918,
        name: "Penthouse Suite in Miami",
        description: "A penthouse suite with panoramic views of the city skyline.",
        price: 700.00,
        previewImage: "https://images.mansionglobal.com//im-697060",
        avgRating: null
      },
      {
        ownerId: 1,
        address: "550 Bluecrest Way",
        city: "San Francisco",
        state: "CA",
        country: "USA",
        lat: 37.7749,
        lng: -122.4194,
        name: "Oceanfront Retreat in SF",
        description: "An oceanfront retreat with stunning sunset views.",
        price: 400.00,
        previewImage: "https://images.mansionglobal.com//im-697060",
        avgRating: null
      },
      {
        ownerId: 2,
        address: "101 Pine St",
        city: "Seattle",
        state: "WA",
        country: "USA",
        lat: 47.6062,
        lng: -122.3321,
        name: "Luxury Penthouse in Seattle",
        description: "A luxurious penthouse with breathtaking city views.",
        price: 600.00,
        previewImage: "https://images.mansionglobal.com//im-697060",
        avgRating: null
      },
      {
        ownerId: 3,
        address: "606 Ocean Dr",
        city: "Orlando",
        state: "FL",
        country: "USA",
        lat: 28.5383,
        lng: -81.3792,
        name: "Disney-themed Villa in Orlando",
        description: "A Disney-themed villa perfect for family vacations.",
        price: 250.00,
        previewImage: "https://images.mansionglobal.com//im-697060",
        avgRating: null
      },
      {
        ownerId: 4,
        address: "404 Spruce St",
        city: "New York",
        state: "NY",
        country: "USA",
        lat: 40.7128,
        lng: -74.0060,
        name: "Charming Brownstone in NYC",
        description: "A charming brownstone with historic character.",
        price: 280.00,
        previewImage: "https://images.mansionglobal.com//im-697060",
        avgRating: null
      },
      {
        ownerId: 5,
        address: "808 Palm St",
        city: "Los Angeles",
        state: "CA",
        country: "USA",
        lat: 34.0522,
        lng: -118.2437,
        name: "Sunset View Apartment in LA",
        description: "An apartment with stunning sunset views.",
        price: 320.00,
        previewImage: "https://images.mansionglobal.com//im-697060",
        avgRating: null
      },
      {
        ownerId: 6,
        address: "909 Cypress Ave",
        city: "Miami",
        state: "FL",
        country: "USA",
        lat: 25.7617,
        lng: -80.1918,
        name: "Luxury Beachfront Condo in Miami",
        description: "A luxury beachfront condo with private beach access.",
        price: 800.00,
        previewImage: "https://images.mansionglobal.com//im-697060",
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

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
        address: "500 Sunset Blvd",
        city: "Los Angeles",
        state: "CA",
        country: "USA",
        lat: 34.0928,
        lng: -118.3287,
        name: "Hollywood Hills Villa",
        description: "A luxurious villa with a view of the Hollywood sign.",
        price: 350.00,
        previewImage: "https://images.app.goo.gl/xyz1",
        avgRating: null
      },
      {
        ownerId: 1,
        address: "221B Baker St",
        city: "London",
        state: "England",
        country: "UK",
        lat: 51.5237,
        lng: -0.1586,
        name: "Sherlock's Cozy Flat",
        description: "A historic flat in the heart of London.",
        price: 200.00,
        previewImage: "https://images.app.goo.gl/xyz2",
        avgRating: null
      },
      {
        ownerId: 2,
        address: "10 Downing St",
        city: "London",
        state: "England",
        country: "UK",
        lat: 51.5034,
        lng: -0.1276,
        name: "Prime Minister's Residence",
        description: "A prestigious residence with historical significance.",
        price: 500.00,
        previewImage: "https://images.app.goo.gl/xyz3",
        avgRating: null
      },
      {
        ownerId: 2,
        address: "1600 Pennsylvania Ave NW",
        city: "Washington",
        state: "DC",
        country: "USA",
        lat: 38.8977,
        lng: -77.0365,
        name: "The White House Guest Suite",
        description: "Stay in a guest suite at the iconic White House.",
        price: 1000.00,
        previewImage: "https://images.app.goo.gl/xyz4",
        avgRating: null
      },
      {
        ownerId: 3,
        address: "1234 Beach Dr",
        city: "Malibu",
        state: "CA",
        country: "USA",
        lat: 34.0259,
        lng: -118.7798,
        name: "Malibu Beach House",
        description: "A stunning beach house with direct ocean access.",
        price: 800.00,
        previewImage: "https://images.app.goo.gl/xyz5",
        avgRating: null
      },
      {
        ownerId: 3,
        address: "789 Broadway",
        city: "New York",
        state: "NY",
        country: "USA",
        lat: 40.7128,
        lng: -74.0060,
        name: "Central Park Penthouse",
        description: "A luxurious penthouse overlooking Central Park.",
        price: 1200.00,
        previewImage: "https://images.app.goo.gl/xyz6",
        avgRating: null
      },
      {
        ownerId: 4,
        address: "456 Ocean Dr",
        city: "Miami",
        state: "FL",
        country: "USA",
        lat: 25.7617,
        lng: -80.1918,
        name: "Oceanfront Condo",
        description: "A modern condo with stunning ocean views.",
        price: 600.00,
        previewImage: "https://images.app.goo.gl/xyz7",
        avgRating: null
      },
      {
        ownerId: 4,
        address: "101 Mountain Rd",
        city: "Aspen",
        state: "CO",
        country: "USA",
        lat: 39.1911,
        lng: -106.8175,
        name: "Aspen Ski Chalet",
        description: "A cozy chalet perfect for winter getaways.",
        price: 700.00,
        previewImage: "https://images.app.goo.gl/xyz8",
        avgRating: null
      },
      {
        ownerId: 5,
        address: "1 Silicon Valley Ln",
        city: "Palo Alto",
        state: "CA",
        country: "USA",
        lat: 37.4419,
        lng: -122.1430,
        name: "Tech Innovator's Home",
        description: "A modern home in the heart of Silicon Valley.",
        price: 900.00,
        previewImage: "https://images.app.goo.gl/xyz9",
        avgRating: null
      },
      {
        ownerId: 5,
        address: "742 Evergreen Terrace",
        city: "Springfield",
        state: "IL",
        country: "USA",
        lat: 39.7817,
        lng: -89.6501,
        name: "Suburban Family Home",
        description: "A comfortable home for a family stay.",
        price: 300.00,
        previewImage: "https://images.app.goo.gl/xyz10",
        avgRating: null
      },
      {
        ownerId: 6,
        address: "555 Grand Ave",
        city: "Los Angeles",
        state: "CA",
        country: "USA",
        lat: 34.0522,
        lng: -118.2437,
        name: "Downtown LA Loft",
        description: "A stylish loft in downtown Los Angeles.",
        price: 400.00,
        previewImage: "https://images.app.goo.gl/xyz11",
        avgRating: null
      },
      {
        ownerId: 6,
        address: "777 Market St",
        city: "San Francisco",
        state: "CA",
        country: "USA",
        lat: 37.7749,
        lng: -122.4194,
        name: "SF Luxury Apartment",
        description: "A luxurious apartment in the heart of San Francisco.",
        price: 450.00,
        previewImage: "https://images.app.goo.gl/xyz12",
        avgRating: null
      },
      {
        ownerId: 7,
        address: "333 Bourbon St",
        city: "New Orleans",
        state: "LA",
        country: "USA",
        lat: 29.9584,
        lng: -90.0656,
        name: "French Quarter Retreat",
        description: "A vibrant retreat in the French Quarter.",
        price: 380.00,
        previewImage: "https://images.app.goo.gl/xyz13",
        avgRating: null
      },
      {
        ownerId: 7,
        address: "123 Maple St",
        city: "Toronto",
        state: "ON",
        country: "Canada",
        lat: 43.6532,
        lng: -79.3832,
        name: "Downtown Toronto Condo",
        description: "A modern condo in downtown Toronto.",
        price: 320.00,
        previewImage: "https://images.app.goo.gl/xyz14",
        avgRating: null
      },
      {
        ownerId: 8,
        address: "1 Infinite Loop",
        city: "Cupertino",
        state: "CA",
        country: "USA",
        lat: 37.3318,
        lng: -122.0312,
        name: "Tech Executive's Residence",
        description: "A luxurious home near Apple headquarters.",
        price: 1000.00,
        previewImage: "https://images.app.goo.gl/xyz15",
        avgRating: null
      },
      {
        ownerId: 8,
        address: "456 Hollywood Blvd",
        city: "Los Angeles",
        state: "CA",
        country: "USA",
        lat: 34.0928,
        lng: -118.3287,
        name: "Star's Hollywood Hideaway",
        description: "A glamorous hideaway for the stars.",
        price: 750.00,
        previewImage: "https://images.app.goo.gl/xyz16",
        avgRating: null
      },
      {
        ownerId: 9,
        address: "200 Disney Ln",
        city: "Orlando",
        state: "FL",
        country: "USA",
        lat: 28.3852,
        lng: -81.5639,
        name: "Disney World Family Villa",
        description: "A family villa close to Disney World.",
        price: 600.00,
        previewImage: "https://images.app.goo.gl/xyz17",
        avgRating: null
      },
      {
        ownerId: 9,
        address: "789 Yonge St",
        city: "Toronto",
        state: "ON",
        country: "Canada",
        lat: 43.6655,
        lng: -79.3839,
        name: "Toronto Luxury Loft",
        description: "A stylish loft in the heart of Toronto.",
        price: 350.00,
        previewImage: "https://images.app.goo.gl/xyz18",
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

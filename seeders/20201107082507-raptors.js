/* eslint-disable */
'use strict';
const db = require("../models");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await db.Raptors.bulkCreate([
      {
        "name": "Kyle Lowry",
        "fieldgoal": 0.416,
        "rebounds": 5,
        "assists": 7.5,
        "turnovers": 3.1,
        "personalfouls": 3.3,
        "points": 19.4,
        "jersey": 7,
        "position": "PG",
        "height": "6'0",
        "weight": 196
      },
      {
        "name": "Fred VanVleet",
        "fieldgoal": 0.413,
        "rebounds": 3.8,
        "assists": 6.6,
        "turnovers": 2.2,
        "personalfouls": 2.4,
        "points": 17.6,
        "jersey": 23,
        "position": "PG",
        "height": "6'1",
        "weight": 197
      },
      {
        "name": "Pascal Siakam",
        "fieldgoal": 0.453,
        "rebounds": 7.3,
        "assists": 3.5,
        "turnovers": 2.5,
        "personalfouls": 2.8,
        "points": 22.9,
        "jersey": 43,
        "position": "PF",
        "height": "6'9",
        "weight": 230
      },
      {
        "name": "OG Anunoby",
        "fieldgoal": 0.505,
        "rebounds": 5.3,
        "assists": 1.6,
        "turnovers": 1.1,
        "personalfouls": 2.4,
        "points": 10.6,
        "jersey": 3,
        "position": "SF",
        "height": "6'7",
        "weight": 232
      },
      {
        "name": "Norman Powell",
        "fieldgoal": 0.495,
        "rebounds": 3.7,
        "assists": 1.8,
        "turnovers": 1.5,
        "personalfouls": 2.1,
        "points": 16,
        "jersey": 24,
        "position": "SG",
        "height": "6'3",
        "weight": 215
      },
      {
        "name": "Serge Ibaka",
        "fieldgoal": 0.512,
        "rebounds": 8.2,
        "assists": 1.4,
        "turnovers": 2,
        "personalfouls": 2.8,
        "points": 15.4,
        "jersey": 9,
        "position": "C",
        "height": "7'0",
        "weight": 235
      },
      {
        "name": "Marc Gasol",
        "fieldgoal": 0.427,
        "rebounds": 6.3,
        "assists": 3.3,
        "turnovers": 1.3,
        "personalfouls": 2.8,
        "points": 7.5,
        "jersey": 33,
        "position": "C",
        "height": "6'11",
        "weight": 255
      },
      {
        "name": "Patrick McCaw",
        "fieldgoal": 0.414,
        "rebounds": 2.3,
        "assists": 2.1,
        "turnovers": 0.8,
        "personalfouls": 1.6,
        "points": 4.6,
        "jersey": 22,
        "position": "SF",
        "height": "6'7",
        "weight": 181
      },
      {
        "name": "Rondae Hollis-Jefferson",
        "fieldgoal": 0.471,
        "rebounds": 4.7,
        "assists": 1.8,
        "turnovers": 1,
        "personalfouls": 1.9,
        "points": 7,
        "jersey": 4,
        "position": "SF",
        "height": "6'6",
        "weight": 217
      },
      {
        "name": "Terence Davis",
        "fieldgoal": 0.456,
        "rebounds": 3.3,
        "assists": 1.6,
        "turnovers": 1.1,
        "personalfouls": 1.7,
        "points": 7.5,
        "jersey": 0,
        "position": "SG",
        "height": "6'4",
        "weight": 201
      },
      {
        "name": "Chris Boucher",
        "fieldgoal": 0.472,
        "rebounds": 4.5,
        "assists": 0.4,
        "turnovers": 0.5,
        "personalfouls": 1.8,
        "points": 6.6,
        "jersey": 25,
        "position": "PF",
        "height": "6'9",
        "weight": 200
      },
      {
        "name": "Matt Thomas",
        "fieldgoal": 0.487,
        "rebounds": 1.5,
        "assists": 0.5,
        "turnovers": 0.4,
        "personalfouls": 0.9,
        "points": 4.9,
        "jersey": 21,
        "position": "SG",
        "height": "6'4",
        "weight": 190
      },
      {
        "name": "Paul Watson",
        "fieldgoal": 0.526,
        "rebounds": 1.9,
        "assists": 0.6,
        "turnovers": 0.4,
        "personalfouls": 0.5,
        "points": 3.9,
        "jersey": 1,
        "position": "SF",
        "height": "6'7",
        "weight": 215
      },
      {
        "name": "Oshae Brissett",
        "fieldgoal": 0.361,
        "rebounds": 1.4,
        "assists": 0.4,
        "turnovers": 0.4,
        "personalfouls": 0.9,
        "points": 1.9,
        "jersey": 12,
        "position": "SF",
        "height": "6'7",
        "weight": 210
      },
      {
        "name": "Stanley Johnson",
        "fieldgoal": 0.373,
        "rebounds": 1.5,
        "assists": 0.8,
        "turnovers": 0.6,
        "personalfouls": 0.6,
        "points": 2.4,
        "jersey": 5,
        "position": "PF",
        "height": "6'6",
        "weight": 242
      },
      {
        "name": "Malcolm Miller",
        "fieldgoal": 0.414,
        "rebounds": 0.6,
        "assists": 0.4,
        "turnovers": 0.1,
        "personalfouls": 0.6,
        "points": 1.3,
        "jersey": 13,
        "position": "SF",
        "height": "6'7",
        "weight": 210
      },
      {
        "name": "Dewan Hernandez",
        "fieldgoal": 0.357,
        "rebounds": 2.3,
        "assists": 0.5,
        "turnovers": 0.5,
        "personalfouls": 1,
        "points": 2.3,
        "jersey": 20,
        "position": "C",
        "height": "6'10",
        "weight": 235
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

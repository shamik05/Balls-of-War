/* eslint-disable */
'use strict';
const db = require("../models");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await db.Lakers.bulkCreate([
      {
        "name": "Kentavious Caldwell-Pope",
        "position": "SG",
        "jersey": 1,
        "height": "6'5",
        "weight": 204,
        "fieldgoal": 0.467,
        "points": 9.3,
        "rebounds": 2.1,
        "assists": 1.6,
        "personalfouls": 1.9,
        "turnovers": 0.9
      },
      {
        "name": "Dwight Howard",
        "position": "C",
        "jersey": 39,
        "height": "6'10",
        "weight": 265,
        "fieldgoal": 0.729,
        "points": 7.5,
        "rebounds": 7.3,
        "assists": 0.7,
        "personalfouls": 3.2,
        "turnovers": 1.2
      },
      {
        "name": "Danny Green",
        "position": "SG",
        "jersey": 14,
        "height": "6'6",
        "weight": 215,
        "fieldgoal": 0.416,
        "points": 8,
        "rebounds": 3.3,
        "assists": 1.3,
        "personalfouls": 2.3,
        "turnovers": 0.9
      },
      {
        "name": "JaVale McGee",
        "position": "C",
        "jersey": 7,
        "height": "7'0",
        "weight": 270,
        "fieldgoal": 0.637,
        "points": 6.6,
        "rebounds": 5.7,
        "assists": 0.5,
        "personalfouls": 1.8,
        "turnovers": 0.8
      },
      {
        "name": "LeBron James",
        "position": "PG",
        "jersey": 23,
        "height": "6'9",
        "weight": 250,
        "fieldgoal": 0.493,
        "points": 25.3,
        "rebounds": 7.8,
        "assists": 10.2,
        "personalfouls": 1.5,
        "turnovers": 3.9
      },
      {
        "name": "Alex Caruso",
        "position": "PG",
        "jersey": 4,
        "height": "6'5",
        "weight": 186,
        "fieldgoal": 0.412,
        "points": 5.5,
        "rebounds": 1.9,
        "assists": 1.9,
        "personalfouls": 2.5,
        "turnovers": 0.8
      },
      {
        "name": "Anthony Davis",
        "position": "PF",
        "jersey": 3,
        "height": "6'10",
        "weight": 253,
        "fieldgoal": 0.503,
        "points": 26.1,
        "rebounds": 9.3,
        "assists": 3.2,
        "personalfouls": 2.1,
        "turnovers": 2.5
      },
      {
        "name": "Kyle Kuzma",
        "position": "PF",
        "jersey": 0,
        "height": "6'8",
        "weight": 221,
        "fieldgoal": 0.436,
        "points": 12.8,
        "rebounds": 4.5,
        "assists": 1.3,
        "personalfouls": 2.2,
        "turnovers": 1.5
      },
      {
        "name": "Avery Bradley",
        "position": "SG",
        "jersey": 11,
        "height": "6'3",
        "weight": 180,
        "fieldgoal": 0.444,
        "points": 8.6,
        "rebounds": 2.3,
        "assists": 1.3,
        "personalfouls": 1.2,
        "turnovers": 1
      },
      {
        "name": "Rajon Rondo",
        "position": "PG",
        "jersey": 9,
        "height": "6'1",
        "weight": 180,
        "fieldgoal": 0.418,
        "points": 7.1,
        "rebounds": 3,
        "assists": 5,
        "personalfouls": 0.9,
        "turnovers": 1.9
      },
      {
        "name": "Jared Dudley",
        "position": "SF",
        "jersey": 10,
        "height": "6'6",
        "weight": 237,
        "fieldgoal": 0.4,
        "points": 1.5,
        "rebounds": 1.2,
        "assists": 0.6,
        "personalfouls": 0.6,
        "turnovers": 0.2
      },
      {
        "name": "Quinn Cook",
        "position": "PG",
        "jersey": 2,
        "height": "6'1",
        "weight": 180,
        "fieldgoal": 0.425,
        "points": 5.1,
        "rebounds": 1.2,
        "assists": 1.1,
        "personalfouls": 2.1,
        "turnovers": 0.8
      },
      {
        "name": "Markieff Morris",
        "position": "PF",
        "jersey": 88,
        "height": "6'8",
        "weight": 245,
        "fieldgoal": 0.406,
        "points": 5.3,
        "rebounds": 3.2,
        "assists": 0.6,
        "personalfouls": 2.3,
        "turnovers": 0.4
      },
      {
        "name": "Dion Waiters",
        "position": "SG",
        "jersey": 18,
        "height": "6'3",
        "weight": 215,
        "fieldgoal": 0.425,
        "points": 11.9,
        "rebounds": 1.9,
        "assists": 2.4,
        "personalfouls": 1.7,
        "turnovers": 1.9
      },
      {
        "name": "Talen Horton-Tucker",
        "position": "SG",
        "jersey": 5,
        "height": "6'4",
        "weight": 234,
        "fieldgoal": 0.467,
        "points": 5.7,
        "rebounds": 1.2,
        "assists": 1,
        "personalfouls": 0.8,
        "turnovers": 1
      },
      {
        "name": "J.R. Smith",
        "position": "SG",
        "jersey": 21,
        "height": "6'6",
        "weight": 225,
        "fieldgoal": 0.318,
        "points": 2.8,
        "rebounds": 0.8,
        "assists": 0.5,
        "personalfouls": 0.4,
        "turnovers": 0.7
      },
      {
        "name": "Kostas Antetokounmpo",
        "position": "PF",
        "jersey": 37,
        "height": "6'10",
        "weight": 200,
        "fieldgoal": 1,
        "points": 1.4,
        "rebounds": 0.6,
        "assists": 0.4,
        "personalfouls": 0,
        "turnovers": 0.2
      },
      {
        "name": "Devontae Cacok",
        "position": "C",
        "jersey": 12,
        "height": "6'7",
        "weight": 240,
        "fieldgoal": 0.5,
        "points": 6,
        "rebounds": 5,
        "assists": 1,
        "personalfouls": 0.7,
        "turnovers": 0
      },
      {
        "name": "Troy Daniels",
        "position": "SG",
        "jersey": 30,
        "height": "6'4",
        "weight": 200,
        "fieldgoal": 0.392,
        "points": 4.2,
        "rebounds": 1.1,
        "assists": 0.3,
        "personalfouls": 0,
        "turnovers": 0.2
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

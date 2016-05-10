var db = require('../db/schema.js');
var MLB_Bet = require('../models/MLB_betModel.js');

var MLB_Bets = new db.Collection();

MLB_Bets.model = MLB_Bet;

module.exports = MLB_Bets;
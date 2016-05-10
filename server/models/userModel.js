var db = require('../db/schema.js');
var MLB_Bet = require('./MLB_betModel.js');

var User = db.Model.extend({
  tableName: 'users',
  events: function() {
    return this.hasMany(MLB_Bet, 'bet_id');
  }
});

module.exports = User;
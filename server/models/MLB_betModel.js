var db = require('../db/schema.js');
var User = require('./userModel.js');

var MLB_Bet = db.Model.extend({
  tableName: 'mlb_bets',
  user: function() {
    return this.belongsTo(User, 'user_id');
  }
});

module.exports = MLB_Bet;
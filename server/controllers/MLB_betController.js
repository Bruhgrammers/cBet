var MLB_Bet = require('../models/MLB_betModel.js');
var MLB_Bets = require('../collections/MLB_betCollection.js');
var User = require('../models/userModel.js');
var Users = require('../collections/userCollection.js');

module.exports = {
  
  addMLB_bet: function(req, res) {
    var username = req.body.username;
    var opponent = req.body.opponent;
    var opposingPitcher = req.body.opposingPitcher;
    var team = req.body.team;
    var pitcher = req.body.pitcher;
    var odds = req.body.odds;
    var amount = req.body.amount;
    var field = req.body.field;

    new User({username: username}).fetch([columns='id'])
      .then(function(found) {
        if(found) {
          var newMLB_Bet = new MLB_Bet({
            opponent: opponent,
            opposingPitcher: opposingPitcher,
            team: team,
            pitcher: pitcher,
            odds: odds,
            amount: amount,
            field: field,
            user_id: found.id
          });

          newMLB_Bet.save()
            .then(function(newBet) {
              MLB_Bets.add(newBet);
              res.send('Successfully added bet.');
            });

        } else {
          res.send('Invalid user trying to add bet.')

        }    
      });
  }
};
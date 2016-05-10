var bodyParser = require('body-parser');

var userController = require('./controllers/userController.js');
var MLB_betController = require('./controllers/MLB_betController.js');

module.exports = function(app, express) {

  app.use(bodyParser.json());

  app.use(express.static('./client'));

  // app.post('/api/users/signin', jsonParser, userController.signin);
  app.post('/api/users/signup', userController.signup);
  // app.get('/api/events/getEvents', eventController.getEvents);
  app.post('/api/bets/addMLB_bet', MLB_betController.addMLB_bet);
  // app.post('/api/events/joinToggle', bodyParser.json(), eventController.joinToggle);
  // app.post('/api/events/getGuestList', bodyParser.json(), eventController.getGuestList);
};
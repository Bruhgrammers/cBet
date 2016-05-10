var User = require('../models/userModel.js');
var Users = require('../collections/userCollection.js');

module.exports = {
  
  signup: function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;

    new User({username: username}).fetch()
      .then(function(found) {
        if(found) {
          res.send('That username already exists.');
        } else {
          var user = new User({
            username: username,
            password: password,
            email: email,
            firstname: firstname,
            lastname: lastname
          });

          user.save()
            .then(function(newUser) {
              Users.add(newUser);
              res.send('Successfully signed up.');
            });
        }
      });
  }
};
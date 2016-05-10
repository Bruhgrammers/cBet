const knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'cbets'
  }
});

const Bookshelf = require('bookshelf')(knex);
const db = Bookshelf;

db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('email', 30).unique();
      user.string('username', 30).unique();
      user.string('firstname', 30);
      user.string('lastname', 30); 
      user.string('password', 252);
    }).then(function(table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('mlb_bets').then(function(exists) {
  if (!exists) {
    knex.schema.createTable('mlb_bets', function(event) {
      event.increments('id').primary();
      event.string('team', 30);
      event.string('pitcher', 30);
      event.string('opponent', 30);
      event.string('opposingPitcher', 30);
      event.integer('odds', 5);
      event.string('result', 4);
      event.integer('amount', 9);
      event.string('field', 4);
      event.dateTime('datetime');
      event.integer('user_id').references('users.id');
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = Bookshelf;

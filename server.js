var static_path = __dirname + '/public';

var express = require('express');

var app = express();
app.use(express.static(static_path));

app.set('views', static_path + '/jade');
app.set('view engine', 'jade');

function User(name, email) {
  this.name = name;
  this.email = email;
}

// Dummy users
var users = [
    new User('tj', 'tj@vision-media.ca')
  , new User('ciaran', 'ciaranj@gmail.com')
  , new User('aaron', 'aaron.heckmann+github@gmail.com')
];

app.get('/', function(req, res){
  res.render('index', { users: users });
});

app.listen(3000);
console.log('Express app started on port %d', 3000);

var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/app/images'));

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT);
console.log('server started on PORT : ' + PORT);

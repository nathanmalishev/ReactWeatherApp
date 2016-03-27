var express = require('express');
var app = express();

var PORT = process.argv.PORT || 3000;

app.use(express.static('dist'));


app.get('*', (req,res)=> {
	res.sendFile(__dirname+'/dist/index.html');
})

app.listen(PORT);
console.log('server started on PORT : '+PORT);
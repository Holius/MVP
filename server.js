var express = require('express');
var app = express();
var path = require('path');
var port = 3000;

app.use(express.static(path.join(__dirname, './dist')))

app.get('/', (req,res) => res.send('sadfjlkads'))

app.listen(port, () => console.log('port ' + port + ' is on'))
const rpio = require('rpio');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.bodyParser());

app.get('/on', function(req, res) {
  console.log(req.body);
  res.send('Turned LED on!!');
  rpio.write(37, rpio.HIGH);
})

app.get('/off', function(req, res) {
  res.send('Turned LED off!!');
  rpio.write(37, rpio.LOW);
})

app.use(express.static('public'));

app.listen(port,function() {
  console.log(`Example app listening at http://localhost:${port}`);
  rpio.open(37, rpio.OUTPUT, rpio.LOW);
})



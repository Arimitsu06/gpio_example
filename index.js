const rpio = require('rpio');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const jsonParser = bodyParser.json()

app.post('/pin_state', jsonParser, function(req, res) {
  console.log(req.body);
  res.send('Turned LED on!!');
  rpio.write(37, rpio.HIGH);
})



app.use(express.static('public'));

app.listen(port,function() {
  console.log(`Example app listening at http://localhost:${port}`);
  rpio.open(37, rpio.OUTPUT, rpio.LOW);
})



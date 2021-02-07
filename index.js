const rpio = require('rpio');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const jsonParser = bodyParser.json();

app.post('/pin_state', jsonParser, function(req, res) {
  console.log(req.body);
  if (req.body.state == 'on') {
    res.json({ state: 'on', status: 'success'});
    rpio.write(req.body.pin_number, rpio.HIGH);
  }
  else if(req.body.state == 'off') {
    res.json({ state: 'off', status: 'success'});
    rpio.write(req.body.pin_number, rpio.LOW);
  }
  else {
    res.json({status: 'failure'});
  }
})

app.get('/pwm', jsonParser, function(req, res) {
  rpio.pwmSetData(33, 512);
})



app.use(express.static('public'));

app.listen(port,function() {
  console.log(`Example app listening at http://localhost:${port}`);
  rpio.open(38, rpio.OUTPUT, rpio.LOW);
  rpio.open(33, rpio.PWM);
  rpio.pwmSetClockDivider(8);
  rpio.pwmSetRange(33, 1024);
})



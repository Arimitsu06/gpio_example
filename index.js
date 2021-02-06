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
    rpio.write(37, rpio.HIGH);
    rpio.write(31, rpio.HIGH);
  }
  else if(req.body.state == 'off') {
    res.json({ state: 'off', status: 'success'});
    rpio.write(37, rpio.LOW);
  }
  else {
    res.json({status: 'failure'});
  }
})




app.use(express.static('public'));

app.listen(port,function() {
  console.log(`Example app listening at http://localhost:${port}`);
  rpio.open(37, rpio.OUTPUT, rpio.LOW);
})



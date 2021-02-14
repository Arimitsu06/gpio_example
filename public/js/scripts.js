let able_to_send = false;
const timer = setInterval( function() {
  able_to_send = true;
}, 10);


document.getElementById("yellow-led-slider").addEventListener("input", function(){
  console.log(this.value)
  if (able_to_send) {
    fetch('/pin_pwm', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({pin_number: 33, state: this.value})
    })
    .then(function(res){ return(res.json())})
    .then(function(data){ console.log(data)})
    able_to_send = false;
  }
});


document.getElementById("red_LED").addEventListener("change", function(){
  console.log(this.checked)
  fetch('/pin_state', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({pin_number: 38, state: this.checked})
  })
  .then(function(res){ return(res.json())})
  .then(function(data){ console.log(data)})
  

});

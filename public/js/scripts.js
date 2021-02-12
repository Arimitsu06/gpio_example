document.getElementById("yellow-led-slider").addEventListener("input", function(){
  console.log(this.value)
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

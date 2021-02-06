document.getElementById("yellow_LED").addEventListener("change", function(){
  console.log(this.checked)
  if (this.checked == true) {
    fetch('/pin_state', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({pin_number: 33, state: 'on'})
    })
    .then(function(res){ return(res.json())})
    .then(function(data){ console.log(data)})
  

}
  else {
    fetch('/pin_state', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({pin_number: 33, state: 'off'})
    })
    .then(function(res){ return(res.json())})
    .then(function(data){ console.log(data)})
}
});
document.getElementById("red_LED").addEventListener("change", function(){
  console.log(this.checked)
  if (this.checked == true) {
    fetch('/pin_state', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({pin_number: 31, state: 'on'})
    })
    .then(function(res){ return(res.json())})
    .then(function(data){ console.log(data)})
  

}
  else {
    fetch('/pin_state', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({pin_number: 31, state: 'off'})
    })
    .then(function(res){ return(res.json())})
    .then(function(data){ console.log(data)})
}
});
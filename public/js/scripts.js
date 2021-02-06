document.getElementById("LED").addEventListener("change", function(){
  console.log(this.checked)
  if (this.checked == true) {
    fetch('/pin_state', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({pin_number: 37, state: 'on'})
    })
    .then(function(res){ console.log(res.body) })

}
  else {
    fetch('/pin_state', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({pin_number: 37, state: 'off'})
    })
    .then(function(res){ console.log(res.body) })
}
});

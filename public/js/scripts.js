document.getElementById("LED").addEventListener("change", function(){
  console.log(this.checked)
  if (this.checked == true) {
    fetch('/pin_state', {
      method: "POST",
      body: JSON.stringify({pin_number: 37, state: 'on'})
    })

}
  else {
    fetch('/pin_state', {
      method: "POST",
      body: JSON.stringify({pin_number: 37, state: 'off'})
    })
}
});

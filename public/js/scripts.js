document.getElementById("LED").addEventListener("change", function(){
  console.log(this.checked)
  if (this.checked == true) {
    fetch('/on', {
      body: JSON.stringify({pin_number: 37, state: 'on'})
    })

}
  else {
    fetch('/off', {
      body: JSON.stringify({pin_number: 37, state: 'off'})
    })
}
});

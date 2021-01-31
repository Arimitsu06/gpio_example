document.getElementById("LED").addEventListener("change", function(){
  console.log(this.checked)
  if (this.checked == true) {
    fetch('/on')
}
  else {
    fetch('/off')
}
});

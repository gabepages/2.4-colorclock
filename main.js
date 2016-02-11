
setInterval(function clock(){
  var d = new Date();
  var secondNumbers = document.querySelector('.seconds');
  var minNumber = document.querySelector('.minutes');
  var hourNumber = document.querySelector('.hours');
  secondNumbers.textContent = d.getSeconds();
  minNumber.textContent = d.getMinutes();
  hourNumber.textContent = d.getHours();


  function zeros(){
  if ( d.getSeconds() < 10){
    secondNumbers.textContent = "0" + d.getSeconds();
  }

  if (d.getMinutes() < 10){
    minNumber.textContent = "0" + d.getMinutes();
  }

  if (d.getHours() < 10){
    hourNumber.textContent = "0" + d.getHours();
  }
  }
  zeros();


  function moveBar (){
    var percent = d.getSeconds()/0.6;
    document.getElementById("bar").style.width = percent + "%";
  }
  moveBar();
  var intToHex3 = d.getSeconds().toString(16), intToHex2 = d.getMinutes().toString(16), intToHex1 = d.getHours().toString(16);
  function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
intToHex1 = pad(intToHex1,2)
intToHex2 = pad(intToHex2,2)
intToHex3 = pad(intToHex3,2)
var backColor = intToHex1 + intToHex2 + intToHex3;
document.querySelector(".hours-hex").textContent = intToHex1;
document.querySelector(".minutes-hex").textContent = intToHex2;
document.querySelector(".seconds-hex").textContent = intToHex3;
document.getElementById('body').style.backgroundColor = "#" + backColor;
// hourNumber.addEventListener("mouseover", function() {
//   hourNumber.textContent = intToHex1;
// });
// minNumber.addEventListener("mouseover", minNumber.textContent = intToHex2);
// secondNumbers.addEventListener("mouseover", secondNumbers.textContent = intToHex3);

},10);

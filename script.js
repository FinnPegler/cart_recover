//var iframe = document.getElementById("booking-widget-iframe");
//var field = iframe.contentWindow.document.querySelector("booking[email]");
var field = document.querySelector("input");

let str = "";

function changeCopy(event) {
str = (field.value)
if (str.match(/.com/i)) {console.log("string is: " + str)}
}

field.addEventListener("keyup", changeCopy)
//document.getElementById("button").addEventListener("click", changeCopy)
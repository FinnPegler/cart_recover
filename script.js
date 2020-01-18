//var iframe = document.getElementById("booking-widget-iframe");
//var field = iframe.contentWindow.document.querySelector("booking[email]");
var field = document.querySelector("input");

let str = "";

function changeCopy(event) {
str = (field.value)
if (str.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i)) {console.log("Email is: " + str)}
}

field.addEventListener("keyup", changeCopy)
//document.getElementById("button").addEventListener("click", changeCopy)
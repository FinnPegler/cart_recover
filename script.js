var iframe = document.getElementById("booking-widget-iframe");
var field = iframe.contentWindow.document.querySelector('booking[email]');

function changeCopy() {
field.placeholder = "hello";
//console.log(field)
}

document.getElementById("button").addEventListener("click", changeCopy)
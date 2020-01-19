var iframe = document.getElementById("booking-widget-iframe");
var field = iframe.contentWindow.document.querySelector("booking[email]");

function changeCopy() {
console.log("function ran")
field.value = "hello";
}

document.getElementById("button").addEventListener("click", changeCopy) 
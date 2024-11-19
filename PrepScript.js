"use strict"
console.log(document);
document.body.innerHTML = "<h1>FORM</h1>";
document.body.innerHTML = document.body.innerHTML + 
"<form>" +
"<input name=test></input>" +
"<input type=button value=do onclick=\"DO()\" class='fade' ></inptu>" +
"</form>";
